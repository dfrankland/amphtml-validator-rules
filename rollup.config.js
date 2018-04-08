export default {
  context: 'global',
  input: './generated/validator_minified.js',
  output: {
    file: './dist/index.js',
    format: 'cjs',
    outro: `
      module.exports.amp = amp;
      module.exports.version = '${process.env.VERSION}';
    `,
  },
};
