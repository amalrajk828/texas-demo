"use client";

import { useEffect, useRef } from "react";

type Props = {
  fragment: string;
  /** Fraction of device pixels to render; smooth shaders can go lower to save GPU. */
  renderScale?: number;
  maxDpr?: number;
  background?: string;
};

const VERTEX = `
attribute vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }
`;

export default function ShaderCanvas({ fragment, renderScale = 1, maxDpr = 1.5, background = "#050505" }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const gl = canvas.getContext("webgl", { antialias: false, alpha: false, powerPreference: "high-performance" });
    if (!gl) return;

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(s));
        gl.deleteShader(s);
        return null;
      }
      return s;
    };
    const vs = compile(gl.VERTEX_SHADER, VERTEX);
    const fs = compile(gl.FRAGMENT_SHADER, fragment);
    if (!vs || !fs) return;
    const program = gl.createProgram()!;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
      return;
    }
    gl.useProgram(program);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const aPos = gl.getAttribLocation(program, "aPos");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(program, "uResolution");
    const uTime = gl.getUniformLocation(program, "uTime");
    const uMouse = gl.getUniformLocation(program, "uMouse");

    const resize = () => {
      const r = wrap.getBoundingClientRect();
      const scale = Math.min(window.devicePixelRatio || 1, maxDpr) * renderScale;
      canvas.width = Math.max(1, Math.round(r.width * scale));
      canvas.height = Math.max(1, Math.round(r.height * scale));
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    const target = { x: 0, y: 0 };
    const mouse = { x: 0, y: 0 };
    const host = wrap.closest("section") ?? wrap;
    const onMove = (e: MouseEvent) => {
      const r = host.getBoundingClientRect();
      target.x = ((e.clientX - r.left) / r.width) * 2 - 1;
      target.y = -(((e.clientY - r.top) / r.height) * 2 - 1);
    };
    const onLeave = () => { target.x = 0; target.y = 0; };
    host.addEventListener("mousemove", onMove as EventListener);
    host.addEventListener("mouseleave", onLeave);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let elapsed = 6; // start mid-animation so the first frame is already composed
    let last = 0;
    let raf = 0;
    let visible = true;
    let shown = false;

    const draw = () => {
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, elapsed);
      gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      if (!shown) { shown = true; canvas.style.opacity = "1"; }
    };

    const frame = (now: number) => {
      if (last) elapsed += Math.min((now - last) / 1000, 0.1);
      last = now;
      mouse.x += (target.x - mouse.x) * 0.05;
      mouse.y += (target.y - mouse.y) * 0.05;
      draw();
      raf = requestAnimationFrame(frame);
    };
    const start = () => {
      if (reduced || raf || !visible || document.hidden) return;
      last = 0;
      raf = requestAnimationFrame(frame);
    };
    const stop = () => { cancelAnimationFrame(raf); raf = 0; };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start(); else stop();
    });
    io.observe(wrap);
    const onVis = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVis);

    if (reduced) draw(); else start();

    return () => {
      stop();
      io.disconnect();
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      host.removeEventListener("mousemove", onMove as EventListener);
      host.removeEventListener("mouseleave", onLeave);
      gl.deleteBuffer(buf);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.getExtension("WEBGL_lose_context")?.loseContext();
    };
  }, [fragment, renderScale, maxDpr]);

  return (
    <div ref={wrapRef} className="absolute inset-0 pointer-events-none" style={{ background }} aria-hidden="true">
      <canvas
        ref={canvasRef}
        className="block w-full h-full"
        style={{ opacity: 0, transition: "opacity 1.2s ease" }}
      />
    </div>
  );
}
