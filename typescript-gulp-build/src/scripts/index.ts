import { SayHello } from "./test/hello";
import { Greetings } from "./test/greetings";
import { Logger } from "./common/logger/Logger";

interface User {
  name: string;
  id: number;
}

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user: User = new UserAccount("Murali", 1001);

const logger = new Logger("UserAccount");

logger.info(`User - id: ${user.id}, name: ${user.name}`);
new SayHello().sayHello(user.name);
new Greetings().greet(user.name);

logger.info(`mutiple values`, "12", "13", "14", "15", "16");

logger.error(`error message test`);
