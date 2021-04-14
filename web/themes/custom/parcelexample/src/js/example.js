(function (Drupal, _drupalSettings) {
  Drupal.behaviors.parcelExample = {
    attach: function (_context, _settings) {
        console.log('Hey Little World!');
    },
  };
})(Drupal, drupalSettings);
