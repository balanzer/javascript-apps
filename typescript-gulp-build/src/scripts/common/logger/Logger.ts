/**
 * Logger logs messages to console.
 */
export class Logger {
  /**
   * Logger prefix value
   * @param name
   */
  constructor(private readonly name: string) {}

  /**
   * log message on console
   * @param level
   * @param message
   * @param args
   */
  private logMessage(level: string, message: string, ...args: any[]) {
    const logger_message = `***target[${this.name}] - ${message}${args.join(
      ""
    )}`;

    if (level === "error") {
      console.error(logger_message);
    } else {
      console.log(logger_message);
    }
  }
  /**
   * log error message
   * @param message
   * @param args
   */
  error(message: string, ...args: any[]) {
    this.logMessage("error", message, ...args);
  }

  /**
   * log info message
   * @param message
   * @param args
   */

  info(message: string, ...args: any[]) {
    this.logMessage("info", message, ...args);
  }

  /**
   * log info message
   * @param message
   * @param args
   */
  log(message: string, ...args: any[]) {
    this.logMessage("info", message, ...args);
  }
}
