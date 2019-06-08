const { version } = require('..');

describe('amphtml-validator-rules', () => {
  it('exports the validator version', () => {
    expect(version).toEqual(process.env.VERSION);
  });
});
