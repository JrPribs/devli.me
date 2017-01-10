(function () {
  'use strict';

  angular
    .module('contact')
    .controller('ContactController', ContactController);

  ContactController.$inject = ['$scope', '$window'];

  function ContactController($window, $scope) {
    var vm = this;
    vm.userEmail = window.user.email;
    vm.contactGroups = [{
        name: 'Quote',
        email: 'quotes@devli.me'
    },{
        name: 'General Questions',
        email: 'general@devli.me'
    },{
        name: 'Press',
        email: 'press@devli.me'
    }];
  }
}());
