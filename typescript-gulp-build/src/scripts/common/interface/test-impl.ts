import { Logger } from "../logger/Logger";

export interface ITestImpl {
  sides: number;
  logger: Logger;
  init: () => void;
  getPerimeter: () => void;
}
