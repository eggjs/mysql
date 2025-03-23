exports['test/mysql.test.ts should make default config stable 1'] = {
  default: {
    connectionLimit: 5,
  },
  app: true,
  agent: true,
  client: {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '',
    database: 'test',
  },
};
