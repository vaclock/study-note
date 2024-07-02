import fs from 'node:fs';

export default function pluginClean({dir = 'dist'}) {
  return {
    name: 'rollup-plugin-clean',
    buildEnd: () => {
      if (fs.existsSync(dir)) {
        fs.rmdirSync(dir, {recursive: true});
      }
    }
  }
}