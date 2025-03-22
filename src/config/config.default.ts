import type { RDSClientOptions } from '@eggjs/rds';

export type MySQLClientOptions = RDSClientOptions;

export interface MySQLClientsOptions {
  [clientName: string]: MySQLClientOptions;
}

export interface MySQLConfig {
  default?: MySQLClientOptions;
  /**
   * load into app, default is `true`
   */
  app?: boolean;
  /**
   * load into agent, default is `false`
   */
  agent?: boolean;
  /**
   * single database
   */
  client?: MySQLClientOptions;
  /**
   * multi databases
   */
  clients?: MySQLClientsOptions;
}

export default {
  mysql: {
    default: {
      connectionLimit: 5,
    },
    app: true,
    agent: false,

    // Single Database
    // client: {
    //   host: 'host',
    //   port: 'port',
    //   user: 'user',
    //   password: 'password',
    //   database: 'database',
    // },

    // Multi Databases
    // clients: {
    //   db1: {
    //     host: 'host',
    //     port: 'port',
    //     user: 'user',
    //     password: 'password',
    //     database: 'database',
    //   },
    //   db2: {
    //     host: 'host',
    //     port: 'port',
    //     user: 'user',
    //     password: 'password',
    //     database: 'database',
    //   },
    // },
  } satisfies MySQLConfig,
};
