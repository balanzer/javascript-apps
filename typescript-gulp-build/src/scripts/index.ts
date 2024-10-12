import { SayHello } from "./test/hello";
import { Greetings } from "./test/greetings";

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

console.log(`User - id: ${user.id}, name: ${user.name}`);
new SayHello().sayHello(user.name);
new Greetings().greet(user.name);
