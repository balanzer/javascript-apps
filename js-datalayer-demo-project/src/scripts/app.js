import { makeServer } from "./server/server";

console.log("environment : ", process.env.NODE_ENV);

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" });
}

const name = "appleaws";
console.log("Hello : ", name);
