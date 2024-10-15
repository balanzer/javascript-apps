import { Logger } from "../../../common/logger/Logger";

export class Greetings {
  logger = new Logger("Greetings");
  greet(name: string) {
    this.logger.info(`Welcome user ${name}`);
  }
}
