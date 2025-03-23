import type { Context } from 'egg';

export default class UserService {
  async list(ctx: Context) {
    return await ctx.app.mysql.query('select * from npm_auth');
  }
}
