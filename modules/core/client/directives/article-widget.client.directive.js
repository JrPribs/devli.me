(function () {
  'use strict';

  // Focus the element on page load
  // Unless the user is on a small device, because this could obscure the page with a keyboard

  angular.module('core')
    .directive('articleWidget', articleWidget);

  articleWidget.$inject = ['$window', 'ArticlesService'];

  function articleWidget($window, ArticlesService) {
    var directive = {
      restrict: 'E',
      link: link
    };

    return directive;

    function link(scope, element, attrs) {
        scope.articles = ArticlesService.query();
    }
  }
}());
