(function (app) {
  'use strict';

  app.registerModule('contact', ['core']);
  app.registerModule('contact.routes', ['ui.router', 'core.routes']);
}(ApplicationConfiguration));
