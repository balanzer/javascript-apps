export class Logger {
  constructor(module) {
    this.name = module;
  }

  debug(message, ...args) {
    console.info(`[${this.name}] ${message}`, ...args);
  }

  info(message, ...args) {
    console.info(`[${this.name}] ${message}`, ...args);
  }

  error(message, ...args) {
    console.error(`[${this.name}] ${message}`, ...args);
  }
}
