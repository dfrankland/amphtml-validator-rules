const { amp: { validator: { createRules } } } = require('..');

describe('amphtml-validator-rules', () => {
  it('can create rules', () => {
    expect(typeof createRules()).toEqual('object');
  });
});
