/**
 * index.ts - to test features.
 */

import { Logger } from "./common/logger/Logger";
import { DomObserver } from "./utils/observer/mutation-observer";

const logger = new Logger("index");

/** Mutation observer - start */

let intervalId = setInterval(() => {
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
  newDiv.classList.add(divType, divName);
  newDiv.textContent = divType + "  " + divName;
  document.querySelector(".my-div-container").appendChild(newDiv);
}, 500);

setTimeout(() => {
  clearInterval(intervalId);
}, 10000);
function callback(selector, value) {
  logger.info("callback for selector: ", selector, ", value : ", value);
}
//create obj

const domObserver: DomObserver = new DomObserver("index");
domObserver.watchSelector(".myclass-5", 6, callback);
domObserver.watchSelector(".myclass-3", 4, callback);
domObserver.watchSelector(".myclass-no-id", 4, callback);
/** Mutation observer - end */
