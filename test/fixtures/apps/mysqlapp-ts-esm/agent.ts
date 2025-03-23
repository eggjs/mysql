import fs from 'node:fs/promises';
import path from 'node:path';

import type { Agent } from 'egg';

export default class Boot {
  private readonly agent: Agent;
  constructor(agent: Agent) {
    this.agent = agent;
  }

  async didReady() {
    const p = path.join(this.agent.baseDir, 'run/agent_result.json');
    await fs.rm(p, { force: true });

    const result = await this.agent.mysql.query('select now() as currentTime;');
    await fs.writeFile(p, JSON.stringify(result));
  }
}
