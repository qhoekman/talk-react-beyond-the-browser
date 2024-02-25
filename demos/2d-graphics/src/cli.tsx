import fs from 'fs';
import { glob } from 'glob';
import path from 'path';

import { Transformer } from '@napi-rs/image';
import satori from 'satori';

import { BUILD_DIR } from './config/constants';
let queryPattern = `./images/**/*.tsx`;
if (process.argv[2]) {
  queryPattern = `./**/${process.argv[2]}.tsx`;
}

const files = await glob(queryPattern, {
  cwd: path.join(process.cwd(), 'src'),
  nodir: true,
});

if (files.length === 0) {
  console.error(`No files found for ${queryPattern}`);
  process.exit(1);
}
if (!fs.existsSync(`${BUILD_DIR}`)) {
  fs.mkdirSync(`${BUILD_DIR}`, { recursive: true });
}
const interFont = fs.readFileSync(
  path.join(process.cwd(), 'src', 'fonts', 'inter-latin-ext-400-normal.woff')
);

files.forEach(async (file) => {
  const filename = path.basename(file, '.tsx');
  const component = await import(path.join(process.cwd(), 'src', file));
  const ComponentImage = component.default;
  const svg = await satori(<ComponentImage />, {
    width: 1200,
    height: 600,
    fonts: [
      {
        name: 'Inter',
        weight: 400,
        style: 'normal',
        data: interFont,
      },
    ],
  });
  fs.writeFileSync(
    path.join(process.cwd(), `${BUILD_DIR}`, `${filename}.svg`),
    svg
  );
  const transformer = Transformer.fromSvg(svg);
  const png = await transformer.png();

  fs.writeFileSync(
    path.join(process.cwd(), `${BUILD_DIR}`, `${filename}.png`),
    png
  );
});
