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

const user: User = new UserAccount("Murali232", 1001);

const logger = new Logger("index");

logger.info(`User - id: ${user.id}, name: ${user.name}`);
new SayHello().sayHello(user.name);
new Greetings().greet(user.name);

logger.info(`mutiple values : `, "12", "13", "14", "15", "16");

logger.error(`error message test`);

/** Mutation observer - start */
setTimeout(function () {
  //create a div to test mutation observer changes
  logger.log("mutation-example - create test div");
  /*
  const newDiv = document.createElement("div");
  // Add the class to the div
  newDiv.classList.add("my-class");
  // Optionally add some content to the div
  newDiv.textContent = "test content";
  // Append the div to an existing element in the DOM
  document.body.appendChild(newDiv); */
}, 6000);

/** Mutation observer - end */
