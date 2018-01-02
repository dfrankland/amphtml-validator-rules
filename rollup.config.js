import { promisify } from 'util';
import { readFile } from 'fs';
import { resolve as resolvePath } from 'path';

export default {
  input: './dist/validator-generated.js',
  output: {
    file: './dist-remote/index.js',
    format: 'cjs',
  },
  intro: promisify(readFile)(resolvePath(__dirname, './goog.provide.js')),
};
