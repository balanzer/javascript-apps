import { Logger } from "../../common/logger/Logger";
/**
 * DomObserver to observe changes in dom.
 */
export class DomObserver {
  /**
   * DomObserver to observe changes in dom.
   */
  constructor(private readonly name: string) {}

  /**
   * to watch for element
   * @param selector
   * @returns
   */
  private async waitForElement(
    selector: string,
    waitTime: number
  ): Promise<string> {
    const logPrefix = `${this.name} - waitForElement`;
    const logger = new Logger(logPrefix);

    const timeOutVal = waitTime * 1000;
    return new Promise((resolve, reject) => {
      try {
        const element = document.querySelector(selector);
        if (element) {
          //logger.log(selector, " selector ready");
          resolve("ready");
        }
        /** if element not found within given time reject and return */
        setTimeout(() => {
          //logger.log(selector, " selector not found - return error");
          reject("not found");
        }, timeOutVal);

        const observer = new MutationObserver(() => {
          const element = document.querySelector(selector);
          if (element) {
            logger.log(selector, " selector ready");
            resolve("ready");
            observer.disconnect();
          }
        });
        observer.observe(document.body, {
          attributes: true,
          childList: true,
          subtree: true,
        });
      } catch (err) {
        logger.log("observer error : ", err);
        reject("error " + err);
      }
    });
  }

  /**
   * watcher - to watch selector loaded or not, timeout after given waitTimeInSecs
   * @param selector
   * @param waitTimeInSecs
   */
  async watchSelector(
    selector: string,
    waitTimeInSecs: number = 5,
    callback: any
  ) {
    const logPrefix = `${this.name} - watchSelector`;
    const logger = new Logger(logPrefix);
    logger.log(
      "watch for selector : ",
      selector,
      " wait time ",
      waitTimeInSecs,
      " secs"
    );
    try {
      if (waitTimeInSecs > 20) {
        logger.log("invalid wait time ", waitTimeInSecs);
        throw new TypeError("invalid wait time");
      }

      if (typeof callback !== "function") {
        logger.log("invalid callback function ", waitTimeInSecs);
        throw new TypeError("invalid callback function");
      }
      const value = await this.waitForElement(selector, waitTimeInSecs);
      logger.log(selector, " selector ready : " + value);
      //callback
      callback(value);
    } catch (error) {
      logger.log(selector, " selector error : " + error);
      //return error message
      if (typeof callback === "function") {
        callback(error);
      }
    }

    /* alternate option
      waitForElement(selector)
        .then(reason => {
          // This code runs if the promise is resolved
          this.logger.log("Promise resolved:", reason);
        })
        .catch(reason => {
          // This code runs if the promise is rejected
          this.logger.log("Promise rejected:", reason);
        });
        */
  }
}
