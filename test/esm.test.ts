import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';

import { mm, type MockApplication } from '@eggjs/mock';

describe('test/esm.test.ts', () => {
  let app: MockApplication;
  const uid = randomUUID();

  before(() => {
    app = mm.app({
      baseDir: 'apps/mysqlapp-ts-esm',
    });
    return app.ready();
  });

  beforeEach(async () => {
    // init test datas
    await app.mysql.query(
      `insert into npm_auth set user_id = 'egg-${uid}-1', password = '1'`
    );
    await app.mysql.query(
      `insert into npm_auth set user_id = 'egg-${uid}-2', password = '2'`
    );
    await app.mysql.query(
      `insert into npm_auth set user_id = 'egg-${uid}-3', password = '3'`
    );
    await app.mysql.queryOne(
      `select * from npm_auth where user_id = 'egg-${uid}-3'`
    );
  });

  afterEach(async () => {
    await app.mysql.query(
      `delete from npm_auth where user_id like 'egg-${uid}%'`
    );
  });

  after(async () => {
    await app.close();
  });

  it('should query mysql user table success', async () => {
    const res = await app.httpRequest().get('/').expect(200);

    assert.equal(res.body.status, 'success');
    assert.equal(res.body.users.length, 3);
  });
});
