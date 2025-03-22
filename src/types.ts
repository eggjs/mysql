import type { Singleton } from '@eggjs/core';
import type { RDSClient } from '@eggjs/rds';

import type { MySQLConfig } from './config/config.default.js';

declare module '@eggjs/core' {
  // add EggAppConfig overrides types
  interface EggAppConfig {
    mysql: MySQLConfig;
  }

  interface EggCore {
    mysql: RDSClient & Singleton<RDSClient>;
    mysqls: Singleton<RDSClient>;
  }
}
