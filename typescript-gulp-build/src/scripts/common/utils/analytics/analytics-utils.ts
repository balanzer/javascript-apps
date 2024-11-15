import { Logger } from "../../logger/Logger";

export class AnalyticsUtils {
  private logger: Logger;

  private LOADED: string = "|loaded";
  private CHANGES_APPLIED: string = "|changes-applied";
  private POLL_FAILED: string = "|failed-poll-failure";
  private ERROR: string = "|failed-error-";

  constructor(name: string) {
    const logPrefix = `${name}-analytics :`;
    this.logger = new Logger(logPrefix);
  }

  public changesApplied(): void {
    //TODO-Pending
  }
  public loaded(): void {
    //TODO-Pending
  }
  public pollFailure(): void {
    //TODO-Pending
  }
  public error(): void {
    //TODO-Pending
  }
}
