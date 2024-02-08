import path from 'path';
import { fileURLToPath } from 'url';
import { BUILD_DIR } from '../config/constants';

export function useFilename(url: ImportMeta['url']) {
  const __filename = fileURLToPath(url);
  const __dirname = path.dirname(__filename);
  const output = path.join(
    BUILD_DIR,
    path.basename(__filename, '.tsx') + '.png'
  );
  return {
    __filename,
    __dirname,
    output,
  };
}
