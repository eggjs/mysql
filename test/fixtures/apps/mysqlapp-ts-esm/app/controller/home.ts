import type { Context } from 'egg';

export default async (ctx: Context) => {
  const users = await ctx.service.user.list(ctx);

  ctx.body = {
    status: 'success',
    users,
  };
};
