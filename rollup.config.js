import json from 'rollup-plugin-json';
import { exec } from 'child_process';
import { appendFile } from 'fs';
import validatorGenerated from './amphtml-validator-rules.json';

export default {
  input: './amphtml-validator-rules.json',
  output: {
    file: './dist/index.js',
    format: 'cjs',
    exports: 'named',
    outro: `exports.version = '${process.env.VERSION}';`,
  },
  plugins: [
    json(),
    {
      writeBundle: async () => {
        await new Promise((resolve) => setTimeout(resolve, 2000));

        await new Promise((resolve, reject) => {
          exec(
            'npm run quicktype',
            { cwd: __dirname, env: process.env },
            (err, stdout, stderr) => {
              process.stdout.write(stdout);
              process.stderr.write(stderr);
              return err ? reject(err) : resolve();
            },
          );
        });

        const code = Object.keys(validatorGenerated).reduce(
          (acc, key) => `${acc}\nexport const ${key}: IndexD['${key}'];`,
          '\nexport const version: string;',
        );

        await new Promise((resolve, reject) => {
          appendFile(
            './dist/index.d.ts',
            code,
            err => (err ? reject(err) : resolve()),
          );
        });
      }
    },
  ],
};
