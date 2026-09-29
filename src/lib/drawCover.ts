export type CanvasImageSourceLike = ImageBitmap | HTMLImageElement;

export function drawCover(
  context: CanvasRenderingContext2D,
  image: CanvasImageSourceLike,
  canvasWidth: number,
  canvasHeight: number,
) {
  const sourceWidth = image.width;
  const sourceHeight = image.height;
  if (!sourceWidth || !sourceHeight || !canvasWidth || !canvasHeight) return;

  const scale = Math.max(canvasWidth / sourceWidth, canvasHeight / sourceHeight);
  const width = sourceWidth * scale;
  const height = sourceHeight * scale;
  const x = (canvasWidth - width) / 2;
  const y = (canvasHeight - height) / 2;

  context.clearRect(0, 0, canvasWidth, canvasHeight);
  context.drawImage(image, x, y, width, height);
}
