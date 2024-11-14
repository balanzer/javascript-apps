import { ITestImpl } from "../../../../common/interface/test-impl";
import { Logger } from "../../../../common/logger/Logger";

export abstract class CommonFeatures implements ITestImpl {
  public sides: number;
  public logger: Logger;

  constructor(name: string) {
    const logPrefix = `${name}-common`;
    this.logger = new Logger(logPrefix);
  }

  abstract getPerimeter(): void;

  init(): void {
    this.logger.info("hello world");
  }
}
