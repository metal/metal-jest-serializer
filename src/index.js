const html = require('js-beautify').html;

module.exports = {
  print(component) {
    const portals = [];

    let componentHTML = component.element.outerHTML;

    if (component.components) {
      for (const childName in component.components) {
        const child = component.components[childName];

        if (child.portalElement) {
          componentHTML += child.element.outerHTML;
        }
      }
    }

    return html(
      componentHTML,
      {
        indent_size: 2,
        unformatted: 'none',
        wrap_line_length: 0
      }
    );
  },

  test(val) {
    return !!val && !!val.__metal_component__;
  }
};
