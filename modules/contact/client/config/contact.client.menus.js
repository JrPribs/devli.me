(function () {
  'use strict';

  angular
    .module('contact')
    .run(menuConfig);

  menuConfig.$inject = ['menuService'];

  function menuConfig(menuService) {
    // Set top bar menu items
    menuService.addMenuItem('topbar', {
      title: 'Contact',
      state: 'contact'
    });
  }
}());
