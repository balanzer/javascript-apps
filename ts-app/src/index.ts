import fs from "fs";

console.log("hello world!");

let matches: any;
matches = fs.readFileSync("football.csv",
    {"encoding": "utf-8"})
    .split("\n")
    .map((row: string): string[] => {
        return row.split(",");
    });

console.log(matches);
