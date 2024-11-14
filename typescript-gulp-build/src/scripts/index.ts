/**
 * index.ts - to test features.
 */

import { Impl_2024_XX_EXP_B } from "./ab-tests/2024/xx/exp-b/2024-XX-EXP-B-Impl";
import { Logger } from "./common/logger/Logger";
import { DomObserver } from "./common/utils/observer/mutation-observer";

//importing jquery will download js lib and added to bundle.js file
//import not reqd if jQuery already exists
//import jQuery from "jquery";

declare let global: any;
global.jQuery = jQuery;

const logger = new Logger("index");

/** Mutation observer - start */

let intervalId = setInterval(() => {
  try {
    const divClassType = ["div-1", "div-2", "div-3"];
    const divClassNames = [
      "myclass-1",
      "myclass-2",
      "myclass-3",
      "myclass-4",
      "myclass-5",
    ];

    const divType = divClassType[Math.floor(Math.random() * 3)];
    const divName = divClassNames[Math.floor(Math.random() * 5)];

    const newDiv = document.createElement("div");
    newDiv.classList.add(divType, divName, "test-class");
    newDiv.textContent = divType + "  " + divName;
    document.querySelector(".my-div-container").appendChild(newDiv);
  } catch (err) {
    logger.info("err :", err);
  }
}, 500);

setTimeout(() => {
  clearInterval(intervalId);

  /** jquery - testing */
  try {
    const totalElements = jQuery(".test-class").length;
    logger.info("jquery total div inside container : ", totalElements);
  } catch (err) {
    logger.info("jquery err :", err);
  }
}, 10000);

function watcherCallback(selector: any, value: string) {
  logger.info("callback for selector: ", selector, ", value : ", value);
}
//create obj

const domObserver: DomObserver = new DomObserver("index");

//observe changes

function observerCallback(status, message, selector) {
  try {
    logger.info(
      "observed selector status : ",
      status,
      ", message : ",
      message,
      ", selector : ",
      selector
    );
  } catch (err) {
    logger.info("err :", err);
  }
}
/*
const targetNodeSelector = "div.my-div-container1";
logger.info("check for : ", targetNodeSelector);

domObserver.notifyWhenElementReady(
  targetNodeSelector,
  observerCallback,
  0.2,
  10
);
*/
/** Mutation observer - end */

/** Test Impl - start */

const impl = new Impl_2024_XX_EXP_B();
impl.greet("my-name");
