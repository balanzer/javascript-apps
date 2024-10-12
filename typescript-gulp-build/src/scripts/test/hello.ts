import { Logger } from "../common/logger/Logger";

export class SayHello {
  logger = new Logger("Greetings");
  sayHello(name: string) {
    this.logger.info(`Hello ${name}`);
  }
}
