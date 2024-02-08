import fs from 'fs';
import { glob } from 'glob';
import path from 'path';
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

files.forEach((file) => {
  import(`./${file}`);
});
