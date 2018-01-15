const serializer = require('../index');

describe('snapshot serializer', () => {
  it('should not pass if the value is not a metal component', () => {
    const val = {};

    expect(serializer.test(val)).toBe(false);
  });

  it('should pass if the value is a metal component', () => {
    const val = {
      __metal_component__: true
    };

    expect(serializer.test(val)).toBe(true);
  });

  it('should serialize to a string', () => {
    const element = document.createElement('div');
    element.innerHTML = 'foo';

    const val = {
      element,
      __metal_component__: true
    };

    expect(serializer.print(val)).toBe('<div>foo</div>');
  });

  it('should append child portals to parent value', () => {
    const element = document.createElement('div');
    element.innerHTML = 'foo';

    const portal = document.createElement('div');
    portal.innerHTML = 'portal';

    const val = {
      element,
      components: {
        portal: {
          element: portal,
          portalElement: true
        }
      },
      __metal_component__: true
    };

    expect(serializer.print(val)).toBe('<div>foo</div>\n<div>portal</div>');
  });
});
