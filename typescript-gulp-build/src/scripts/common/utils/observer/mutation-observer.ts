import { Logger } from "../../logger/Logger";
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
            //logger.log(selector, " selector ready");
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
        //logger.log("observer error : ", err);
        reject("error " + err);
      }
    });
  }

  /**
   * watcher - to watch selector loaded or not, timeout after given waitTimeInSecs
   * @param selector
   * @param waitTimeInSecs
   * @param callback
   */
  async watchForChanges(
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
      if (waitTimeInSecs > 20 || waitTimeInSecs <= 0) {
        logger.log("invalid wait time ", waitTimeInSecs);
        throw new TypeError("invalid wait time");
      }

      if (typeof callback !== "function") {
        logger.log("invalid callback function");
        throw new TypeError("invalid callback function");
      }
      const value = await this.waitForElement(selector, waitTimeInSecs);
      //logger.log(selector, " selector ready : " + value);
      //callback
      callback(selector, value);
    } catch (error) {
      //logger.log(selector, " selector error : " + error);
      //return error message
      if (typeof callback === "function") {
        callback(selector, error);
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

  /**
   * Wait for element to load, once loaded or after timeout and callback
   * @param targetNodeSelector
   * @param callback
   * @param retryDelayInSecs
   * @param maxRetry
   * @param config
   */
  notifyWhenElementReady(
    targetNodeSelector: string,
    callback: any,
    retryDelayInSecs: number = 0.3,
    maxRetry: number = 20,
    config: any = { attributes: true, childList: true, subtree: true }
  ) {
    const logPrefix = `${this.name} - observeChanges`;
    const logger = new Logger(logPrefix);

    if (typeof callback !== "function") {
      logger.log("invalid callback function");
      throw new TypeError("invalid callback function");
    }

    if (retryDelayInSecs > 1.1 || retryDelayInSecs <= 0) {
      logger.log("invalid retry delay : ", retryDelayInSecs);
      throw new TypeError("invalid retry delay : " + retryDelayInSecs);
    }

    if (maxRetry > 100 || maxRetry <= 0) {
      logger.log("invalid retry value : ", maxRetry);
      throw new TypeError("invalid retry value : " + maxRetry);
    }

    //countdown counter
    let counter = 0; //retry counter < maxRetry

    let intervalId = setInterval(() => {
      try {
        counter = counter + 1;
        if (!!targetNodeSelector) {
          const targetNode = document.querySelector(targetNodeSelector);
          if (!!targetNode) {
            clearInterval(intervalId);

            //selector ready
            //return callback with status success
            callback(true, "selector ready", targetNodeSelector);
          } else {
            logger.log("selector missing");
          }
        } else {
          logger.log("invalid target node");
          throw new TypeError("invalid target node");
        }

        //clear interval after max retry

        if (counter >= maxRetry) {
          clearInterval(intervalId);
          //return callback with status failed
          callback(false, "selector not found", targetNodeSelector);
        }
      } catch (err) {
        logger.info("err :", err);
      }
    }, retryDelayInSecs * 1000);

    // clear interval (for error scenarios) after 8 secs
    setTimeout(() => {
      clearInterval(intervalId);
    }, 8000);
  }
}

/**
 * This is not util function.
 * Example snippet to show to to use
 */
function __howToExample1() {
  //observer call back function
  function observerCallback() {
    // Handle callback
  }

  //target dom element or note
  const targetNodeSelector = "div.my-div-container";
  const retryDelayInSecs: number = 0.2; //wait interval to check node exists or not
  const maxRetry: number = 5; //max retry;

  const domObserver: DomObserver = new DomObserver("file-name");
  domObserver.notifyWhenElementReady(
    targetNodeSelector,
    observerCallback,
    retryDelayInSecs,
    maxRetry
  );
}

/**
 * This is not util function.
 * Example snippet to show to to use
 */
function __howToExample2() {
  //watcher call back function
  function watcherCallback(selector: any, value: string) {
    // Handle callback
    //logger.info("callback for selector: ", selector, ", value : ", value);
  }

  //target dom element or note
  const targetSelector = ".myclass-5";
  const waitTimeInSecs: number = 5; //wait interval to check node exists or not

  const domObserver: DomObserver = new DomObserver("file-name");
  domObserver.watchForChanges(targetSelector, waitTimeInSecs, watcherCallback);
}
