import {CSVFileReader} from "./app/reader/CSVFileReader";


const reader = new CSVFileReader("./football.csv");

const matches = reader.data;

console.log("Total records : ", matches.length)

enum MatchResults {
    HomeWin = "H",
    AwayWin = "A",
    Draw = "D",
}

let manUnitedWins = 0;


for (let match of matches) {
    if (match[1] === "Man United" && match[5] === MatchResults.HomeWin) {
        manUnitedWins = manUnitedWins + 1;
    } else if (match[2] === "Man United" && match[5] === MatchResults.AwayWin) {
        manUnitedWins = manUnitedWins + 1;
    }
}

console.log(`Man United won ${manUnitedWins} games.`);