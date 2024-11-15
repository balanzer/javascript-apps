import { Logger } from "../../logger/Logger";

export class AnalyticsUtils {
  private logger: Logger;
  private name: string;

  private LOADED: string = "|loaded";
  private CHANGES_APPLIED: string = "|changes-applied";
  private POLL_FAILED: string = "|failed-poll-failure";
  private ERROR: string = "|failed-error-";

  constructor(name: string) {
    const logPrefix = `${name}-analytics :`;
    this.name = name;
    this.logger = new Logger(logPrefix);
  }

  public changesApplied(): void {
    const message = `${this.name}${this.CHANGES_APPLIED}`;
    this.recordMessage(message);
  }
  public loaded(): void {
    const message = `${this.name}${this.LOADED}`;
    this.recordMessage(message);
  }
  public pollFailure(): void {
    const message = `${this.name}${this.POLL_FAILED}`;
    this.recordMessage(message);
  }
  public error(errorMessage: string): void {
    const message = `${this.name}${this.ERROR}${errorMessage}`;
    this.recordMessage(message);
  }

  private recordMessage(message: string): void {
    this.logger.info("message : ", message);

    window.dispatchEvent(
      new CustomEvent("martech-a4t-custom-message", {
        detail: message,
      })
    );
  }
}
