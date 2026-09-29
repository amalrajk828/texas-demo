"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { CanvasImageSourceLike } from "@/src/lib/drawCover";

type FrameListener = (index: number) => void;

interface FrameSequenceOptions {
  enabled: boolean;
  frameCount: number;
  framePath: string;
}

export interface FrameSequence {
  framesRef: React.MutableRefObject<Array<CanvasImageSourceLike | null>>;
  firstFrameReady: boolean;
  getNearestFrame: (index: number) => CanvasImageSourceLike | null;
  subscribe: (listener: FrameListener) => () => void;
}

const MAX_CONCURRENT = 6;

function frameUrl(pattern: string, index: number) {
  return pattern.replace("%04d", String(index + 1).padStart(4, "0"));
}

async function decodeFrame(url: string, signal: AbortSignal): Promise<CanvasImageSourceLike> {
  const response = await fetch(url, { signal });
  if (!response.ok) throw new Error(`Unable to load frame: ${url}`);
  const blob = await response.blob();

  if (typeof createImageBitmap === "function") {
    return createImageBitmap(blob);
  }

  return new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();
    const objectUrl = URL.createObjectURL(blob);
    const release = () => URL.revokeObjectURL(objectUrl);
    image.onload = () => {
      release();
      resolve(image);
    };
    image.onerror = () => {
      release();
      reject(new Error(`Unable to decode frame: ${url}`));
    };
    image.src = objectUrl;
  });
}

function progressiveOrder(frameCount: number) {
  const order: number[] = [];
  const seen = new Set<number>([0]);

  for (const step of [8, 4, 2, 1]) {
    for (let index = step; index < frameCount; index += step) {
      if (!seen.has(index)) {
        seen.add(index);
        order.push(index);
      }
    }
  }

  return order;
}

export function useFrameSequence({ enabled, frameCount, framePath }: FrameSequenceOptions): FrameSequence {
  const framesRef = useRef<Array<CanvasImageSourceLike | null>>([]);
  const listenersRef = useRef(new Set<FrameListener>());
  const [firstFrameReady, setFirstFrameReady] = useState(false);

  const subscribe = useCallback((listener: FrameListener) => {
    listenersRef.current.add(listener);
    return () => listenersRef.current.delete(listener);
  }, []);

  const getNearestFrame = useCallback((requestedIndex: number) => {
    const frames = framesRef.current;
    const index = Math.min(Math.max(Math.round(requestedIndex), 0), Math.max(frames.length - 1, 0));
    if (frames[index]) return frames[index];

    for (let distance = 1; distance < frames.length; distance += 1) {
      const before = index - distance;
      const after = index + distance;
      if (before >= 0 && frames[before]) return frames[before];
      if (after < frames.length && frames[after]) return frames[after];
    }

    return null;
  }, []);

  useEffect(() => {
    setFirstFrameReady(false);
    framesRef.current = Array.from({ length: frameCount }, () => null);
    if (!enabled) return;

    const controller = new AbortController();
    let cancelled = false;
    let active = 0;
    let idleId: number | null = null;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    const queue = progressiveOrder(frameCount);

    const notify = (index: number) => {
      listenersRef.current.forEach((listener) => listener(index));
    };

    const schedule = (callback: () => void) => {
      if ("requestIdleCallback" in window) {
        idleId = window.requestIdleCallback(callback, { timeout: 120 });
      } else {
        timeoutId = setTimeout(callback, 16);
      }
    };

    const pump = () => {
      if (cancelled) return;
      while (active < MAX_CONCURRENT && queue.length > 0) {
        const index = queue.shift();
        if (index === undefined) break;
        active += 1;
        decodeFrame(frameUrl(framePath, index), controller.signal)
          .then((frame) => {
            if (cancelled) {
              if (frame instanceof ImageBitmap) frame.close();
              return;
            }
            framesRef.current[index] = frame;
            notify(index);
          })
          .catch((error: unknown) => {
            if (!controller.signal.aborted) console.error(error);
          })
          .finally(() => {
            active -= 1;
            if (queue.length > 0) schedule(pump);
          });
      }
    };

    decodeFrame(frameUrl(framePath, 0), controller.signal)
      .then((frame) => {
        if (cancelled) {
          if (frame instanceof ImageBitmap) frame.close();
          return;
        }
        framesRef.current[0] = frame;
        setFirstFrameReady(true);
        notify(0);
        schedule(pump);
      })
      .catch((error: unknown) => {
        if (!controller.signal.aborted) console.error(error);
      });

    return () => {
      cancelled = true;
      controller.abort();
      if (idleId !== null && "cancelIdleCallback" in window) window.cancelIdleCallback(idleId);
      if (timeoutId !== null) clearTimeout(timeoutId);
      framesRef.current.forEach((frame) => {
        if (frame instanceof ImageBitmap) frame.close();
      });
      framesRef.current = [];
    };
  }, [enabled, frameCount, framePath]);

  return { framesRef, firstFrameReady, getNearestFrame, subscribe };
}
