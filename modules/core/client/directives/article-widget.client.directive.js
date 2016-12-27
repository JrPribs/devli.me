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
      templateUrl: '/modules/core/client/views/article-widget.client.view.html',
      link: link
    };

    return directive;

    function link(scope, element, attrs) {
      return ArticlesService.query().$promise.then(function(res) {
        scope.articles = res;
        console.log('articles', scope.articles);
        console.log('articles', scope.articles.length);
        scope.articles = _.map(scope.articles, function(article) {
          article.preview = article.content.slice(0, 49);
          return article;
        });
      });
    }


  }
}());
