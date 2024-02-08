import {
  drawOffscreen,
  makeOffscreenSurface,
} from '@shopify/react-native-skia/lib/commonjs/headless';
import { LoadSkiaWeb } from '@shopify/react-native-skia/lib/commonjs/web/LoadSkiaWeb';
import fs from 'fs';

type ImageRendererOptions = {
  canvasWidth: number;
  canvasHeight: number;
  output: string;
};

export const imageRenderer = async (
  node: React.ReactNode,
  { canvasHeight, canvasWidth, output }: ImageRendererOptions = {
    canvasWidth: 256,
    canvasHeight: 256,
    output: 'output.png',
  }
) => {
  await LoadSkiaWeb();
  const surface = makeOffscreenSurface(canvasWidth, canvasHeight);
  const image = drawOffscreen(surface, node);

  fs.writeFileSync(output, image.encodeToBytes());
  console.log(`Image written to ${output}`);
  // Cleaning up CanvasKit resources
  image.dispose();
  surface.dispose();
};
