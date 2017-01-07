(function () {
  'use strict';

  angular
    .module('contact')
    .controller('ContactController', ContactController);

  ContactController.$inject = ['$scope', '$state', 'Authentication', 'Socket'];

  function ContactController($scope, $state, Authentication, Socket) {
    var vm = this;


  }
}());
