import { createServer } from "miragejs";
import { Logger } from "../logger/log";
const logger = new Logger("server");
export function makeServer({ environment = "development" } = {}) {
  logger.info("build backend server for environment : ", environment);
  let server = createServer();
  return server;
}
