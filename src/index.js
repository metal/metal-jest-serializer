const {html} = require('js-beautify');

module.exports = {
  print(component) {
    return html(
      component.element.outerHTML,
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
