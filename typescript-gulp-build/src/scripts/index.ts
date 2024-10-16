/**
 * index.ts - to test features.
 */

import { Logger } from "./common/logger/Logger";
import { DomObserver } from "./utils/observer/mutation-observer";

//importing jquery will download js lib and added to bundle.js file
import jQuery from "jquery"; //import not reqd if jQuery already exists

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
domObserver.watchSelector(".myclass-5", 6, watcherCallback);
domObserver.watchSelector(".myclass-3", 4, watcherCallback);
domObserver.watchSelector(".myclass-no-id", 4, watcherCallback);

//observe changes

function observerCallback() {
  try {
    logger.info("changes observed.");
    domObserver.observeChanges(targetNode, observerCallback, 0.5);
  } catch (err) {
    logger.info("err :", err);
  }
}

const targetNode = document.querySelector("div.my-div-container");

domObserver.observeChanges(targetNode, observerCallback, 0.2);

/** Mutation observer - end */
