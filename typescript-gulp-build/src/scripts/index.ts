/**
 * index.ts - to test features.
 */

import { Logger } from "./common/logger/Logger";
import { DomObserver } from "./utils/observer/mutation-observer";

const logger = new Logger("index");

logger.info("start");

/** Mutation observer - start */

let intervalId = setInterval(() => {
  //create a div to test mutation observer changes
  //logger.log("mutation-example - create test div");

  const newDiv = document.createElement("div");
  newDiv.classList.add("my-class");
  newDiv.textContent = "test content";
  document.body.appendChild(newDiv);
}, 500);

setTimeout(() => {
  clearInterval(intervalId);
}, 5000);
function callback(value) {
  logger.info("callback value : ", value);
}
//create obj

const domObserver: DomObserver = new DomObserver("index");
domObserver.watchSelector(".apple", 3, callback);
domObserver.watchSelector(".my-class1", 6, callback);
domObserver.watchSelector(".my-class", 4, callback);
/** Mutation observer - end */

logger.info("end");
