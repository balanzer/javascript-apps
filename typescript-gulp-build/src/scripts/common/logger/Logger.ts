export class Logger {
  constructor(private readonly name: string) {}

  logMessage(level: string, message: string, ...args: any[]) {
    const logger_message = `**target[${this.name}] - ${message} ${args}`;

    if (level === "error") {
      console.error(logger_message);
    } else {
      console.log(logger_message);
    }
  }

  error(message: string, ...args: any[]) {
    this.logMessage("error", message, ...args);
  }

  info(message: string, ...args: any[]) {
    this.logMessage("info", message, ...args);
  }
  log(message: string, ...args: any[]) {
    this.logMessage("info", message, ...args);
  }
}
