const fs = require('node:fs');
const path = require('node:path');

module.exports = class Boot {
  constructor(agent) {
    this.agent = agent;
  }

  async didReady() {
    this.agent.mysql1 = await this.agent.mysql.createInstanceAsync(this.agent.config.mysql1);
    const p = path.join(__dirname, 'run/agent_result.json');
    fs.existsSync(p) && fs.unlinkSync(p);

    const result = await this.agent.mysql1.query('select now() as currentTime;');
    fs.writeFileSync(p, JSON.stringify(result));
  }
};
