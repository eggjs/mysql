# @eggjs/mysql

[![NPM version][npm-image]][npm-url]
[![CI](https://github.com/eggjs/mysql/actions/workflows/nodejs.yml/badge.svg?branch=master)](https://github.com/eggjs/mysql/actions/workflows/nodejs.yml)
[![Test coverage][codecov-image]][codecov-url]
[![npm download][download-image]][download-url]
[![Node.js Version](https://img.shields.io/node/v/@eggjs/mysql.svg?style=flat)](https://nodejs.org/en/download/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://makeapullrequest.com)
![CodeRabbit Pull Request Reviews](https://img.shields.io/coderabbit/prs/github/eggjs/mysql)

[npm-image]: https://img.shields.io/npm/v/@eggjs/mysql.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@eggjs/mysql
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/mysql.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/mysql?branch=master
[download-image]: https://img.shields.io/npm/dm/@eggjs/mysql.svg?style=flat-square
[download-url]: https://npmjs.org/package/@eggjs/mysql

MySQL plugin for Egg.js

## Install

```bash
npm i @eggjs/mysql
```

MySQL Plugin for `egg@4`, support egg application access to MySQL database.

> If you're using `egg@3`, please use `egg-mysql@5` instead.

This plugin based on [@eggjs/rds], if you want to know specific usage, you should refer to the document of [@eggjs/rds].

## Configuration

Change `${app_root}/config/plugin.ts` to enable MySQL plugin:

```ts
export default {
  mysql: {
    enable: true,
    package: '@eggjs/mysql',
  },
};
```

Configure database information in `${app_root}/config/config.default.ts`:

### Simple database instance

```ts
export default {
  mysql: {
    // database configuration
    client: {
      // host
      host: 'mysql.com',
      // port
      port: '3306',
      // username
      user: 'test_user',
      // password
      password: 'test_password',
      // database
      database: 'test',
    },
    // load into app, default is `true`
    app: true,
    // load into agent, default is `false`
    agent: false,
  },
};
```

Usage:

```ts
await app.mysql.query(sql, values); // you can access to simple database instance by using app.mysql.
```

### Multiple database instance

```ts
export default {
  mysql: {
    clients: {
      // clientId, access the client instance by app.mysql.get('clientId')
      db1: {
        // host
        host: 'mysql.com',
        // port
        port: '3306',
        // username
        user: 'test_user',
        // password
        password: 'test_password',
        // database
        database: 'test',
      },
      // ...
    },
    // default configuration for all databases
    default: {},
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  },
};
```

Usage:

```ts
const client1 = app.mysqls.getSingletonInstance('db1');
await client1.query(sql, values);

const client2 = app.mysqls.getSingletonInstance('db2');
await client2.query(sql, values);
```

## CRUD user guide

### Create

```ts
// insert
const result = await app.mysql.insert('posts', { title: 'Hello World' });
const insertSuccess = result.affectedRows === 1;
```

### Read

```ts
// get
const post = await app.mysql.get('posts', { id: 12 });
// query
const results = await app.mysql.select('posts', {
  where: { status: 'draft' },
  orders: [
    ['created_at', 'desc'],
    ['id', 'desc'],
  ],
  limit: 10,
  offset: 0,
});
```

### Update

```ts
// update by primary key ID, and refresh
const row = {
  id: 123,
  name: 'fengmk2',
  otherField: 'other field value',
  modifiedAt: app.mysql.literals.now, // `now()` on db server
};
const result = await app.mysql.update('posts', row);
const updateSuccess = result.affectedRows === 1;
```

### Delete

```ts
const result = await app.mysql.delete('table-name', {
  name: 'fengmk2',
});
```

## Transaction

### Manual control

- adventage: `beginTransaction`, `commit` or `rollback` can be completely under control by developer
- disadventage: more handwritten code, Forgot catching error or cleanup will lead to serious bug.

```ts
const conn = await app.mysql.beginTransaction();

try {
  await conn.insert(table, row1);
  await conn.update(table, row2);
  await conn.commit();
} catch (err) {
  // error, rollback
  await conn.rollback(); // rollback call won't throw err
  throw err;
}
```

### Automatic control: Transaction with scope

- API：`async beginTransactionScope(scope, ctx)`
  - `scope`: A generatorFunction which will execute all sqls of this transaction.
  - `ctx`: The context object of current request, it will ensures that even in the case of a nested transaction, there is only one active transaction in a request at the same time.
- adventage: easy to use, as if there is no transaction in your code.
- disadvantage: all transation will be successful or failed, cannot control precisely

```ts
const result = await app.mysql.beginTransactionScope(async conn => {
  // don't commit or rollback by yourself
  await conn.insert(table, row1);
  await conn.update(table, row2);
  return { success: true };
}, ctx); // ctx is the context of current request, access by `this.ctx`.
// if error throw on scope, will auto rollback
```

## Advance

### Custom SQL splicing

```ts
const results = await app.mysql.query(
  'update posts set hits = (hits + ?) where id = ?',
  [1, postId]
);
```

### Literal

If you want to call literals or functions in mysql , you can use `Literal`.

#### Inner Literal

- NOW(): The database system time, you can obtain by `app.mysql.literals.now`.

```ts
await app.mysql.insert(table, {
  create_time: app.mysql.literals.now,
});

// INSERT INTO `$table`(`create_time`) VALUES(NOW())
```

#### Custom literal

The following demo showed how to call `CONCAT(s1, ...sn)` function in mysql to do string splicing.

```ts
const Literal = app.mysql.literals.Literal;
const first = 'James';
const last = 'Bond';
await app.mysql.insert(table, {
  id: 123,
  fullname: new Literal(`CONCAT("${first}", "${last}"`),
});

// INSERT INTO `$table`(`id`, `fullname`) VALUES(123, CONCAT("James", "Bond"))
```

## For the local dev

Run docker compose to start test mysql service

```bash
docker compose -f docker-compose.yml up -d
# if you run the first time, should wait for ~20s to let mysql service init started
```

Run the unit tests

```bash
npm test
```

Stop test mysql service

```bash
docker compose -f docker-compose.yml down
```

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/mysql/issues).

## License

[MIT](LICENSE)

## Contributors

[![Contributors](https://contrib.rocks/image?repo=eggjs/mysql)](https://github.com/eggjs/mysql/graphs/contributors)

Made with [contributors-img](https://contrib.rocks).

[@eggjs/rds]: https://github.com/node-modules/rds
