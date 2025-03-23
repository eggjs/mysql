'use strict';

module.exports = function exports(app) {
  app.get('/', app.controller.home);
};
