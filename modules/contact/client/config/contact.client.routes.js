(function () {
  'use strict';

  angular
    .module('contact.routes')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('contact', {
        url: '/contact',
        templateUrl: '/modules/contact/client/views/contact.client.view.html',
        controller: 'ContactController',
        controllerAs: 'vm',
        data: {
          roles: ['user', 'admin'],
          pageTitle: 'Contact'
        }
      });
  }
}());
