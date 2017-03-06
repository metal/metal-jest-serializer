const {print, test} = require('../index');

describe('snapshot serializer', () => {
  it('should not pass if the value is not a metal component', () => {
    const val = {};

    expect(test(val)).toBe(false);
  });

  it('should pass if the value is a metal component', () => {
    const val = {
    __metal_component__: true
    };

    expect(test(val)).toBe(true);
    });

  it('should serialize to a string', () => {
    const element = document.createElement('div');
    element.innerHTML = 'foo';

    const val = {
      element,
      __metal_component__: true
    };

    expect(print(val)).toBe('<div>foo</div>');
  });
});
