const IncrementalDomRenderer = require('metal-incremental-dom').default;
const html = require('js-beautify').html;

module.exports = {
  print(component) {
    let componentHTML = appendPortalMarkup(
      component,
      component.element.outerHTML
    );

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

function appendPortalMarkup(component, snapshot) {
  snapshot = snapshot || '';

  const data = IncrementalDomRenderer.getData(component);

  if (data.childComponents && data.childComponents.length) {
    for (const childName in data.childComponents) {
      const childComponent = data.childComponents[childName];

      if (childComponent.portalElement) {
        snapshot += childComponent.element.outerHTML;
      }

      snapshot = appendPortalMarkup(childComponent, snapshot);
    }
  }

  return snapshot;
}
