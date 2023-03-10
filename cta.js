/* global AFRAME */

/**
 * Change color if entity when intersected by raycaster.
 */
AFRAME.registerComponent('cta', {
  init: function () {
    var el = this.el;
    var material = el.getAttribute('material');
    var initialColor = material.color;
    var self = this;

    el.addEventListener('mousedown', function (evt) {
      el.setAttribute('material', 'color', '#EF2D5E');
      el.setAttribute('material', 'transparent', 'false');
    });

    el.addEventListener('mouseup', function (evt) {
      el.setAttribute('material', 'color', self.isMouseEnter ? '#24CAFF' : initialColor);
      el.setAttribute('material', 'transparent', 'false');
    });

    el.addEventListener('mouseenter', function () {
      el.setAttribute('material', 'color', '#24CAFF');
      el.setAttribute('material', 'transparent', 'false');
      self.isMouseEnter = true;
    });

    el.addEventListener('mouseleave', function () {
      el.setAttribute('material', 'color', initialColor);
      el.setAttribute('material', 'transparent', 'false');
      self.isMouseEnter = false;
    });
  }
});

