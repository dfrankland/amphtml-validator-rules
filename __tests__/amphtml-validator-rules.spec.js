const { amp: { validator: { createRules } }, version } = require('..');

describe('amphtml-validator-rules', () => {
  it('can create rules', () => {
    expect(typeof createRules()).toEqual('object');
  });

  it('exports the validator version', () => {
    expect(version).toEqual(process.env.VERSION);
  });
});
