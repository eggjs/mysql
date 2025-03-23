import type { EggAppConfig, PowerPartial } from 'egg';

export default {
  keys: 'foo',
  mysql: {
    client: {
      host: '127.0.0.1',
      port: 3306,
      user: 'root',
      password: '',
      database: 'test',
    },
    agent: true,
  },
} satisfies PowerPartial<EggAppConfig>;
