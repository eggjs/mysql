import type { Application } from 'egg';

export default (app: Application) => {
  app.get('/', app.controller.home);
};
