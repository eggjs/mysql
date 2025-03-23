module.exports = class Boot {
  constructor(app) {
    this.app = app;
  }

  async didReady() {
    this.app.mysql1 = await this.app.mysql.createInstanceAsync(this.app.config.mysql1);
  }
}
