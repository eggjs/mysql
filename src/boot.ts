import { RDSClient, type RDSClientOptions } from '@eggjs/rds';
import type { EggCore, ILifecycleBoot } from '@eggjs/core';

async function createMySQLClient(
  config: RDSClientOptions,
  app: EggCore,
  clientName = 'default'
) {
  app.coreLogger.info(
    '[@eggjs/mysql] clientName[%s] connecting %s@%s:%s/%s',
    clientName,
    config.user,
    config.host,
    config.port,
    config.database
  );
  const client = new RDSClient(config);

  const rows = await client.query('select now() as currentTime;');
  app.coreLogger.info(
    '[@eggjs/mysql] clientName[%s] status OK, MySQL Server currentTime: %j',
    clientName,
    rows[0].currentTime
  );
  return client;
}

export class MySQLBootHook implements ILifecycleBoot {
  private readonly app: EggCore;
  constructor(app: EggCore) {
    this.app = app;
  }

  configDidLoad() {
    if (this.app.type === 'application' && !this.app.config.mysql.app) {
      return;
    } else if (this.app.type === 'agent' && !this.app.config.mysql.agent) {
      return;
    }

    this.app.addSingleton('mysql', createMySQLClient);
    // alias to app.mysqls
    // https://github.com/eggjs/core/blob/41fe40ff68432db1f0bd89a88bdc33dd321bffb6/src/singleton.ts#L50
    Reflect.defineProperty(this.app, 'mysqls', {
      get() {
        return this.mysql;
      },
    });
  }
}
