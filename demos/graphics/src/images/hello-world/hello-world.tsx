import {
  Circle,
  Group,
} from '@shopify/react-native-skia/lib/commonjs/headless';
import { useFilename } from '../../hooks/useFilename';
import { imageRenderer } from '../../renderer';

(async () => {
  const { output } = useFilename(import.meta.url);
  const width = 256;
  const r = width * 0.33;

  await imageRenderer(
    <Group blendMode="multiply">
      <Circle cx={r} cy={r} r={r} color="cyan" />
      <Circle cx={width - r} cy={r} r={r} color="magenta" />
      <Circle cx={width / 2} cy={width - r} r={r} color="yellow" />
    </Group>,
    {
      canvasWidth: width,
      canvasHeight: width,
      output,
    }
  );
})();
