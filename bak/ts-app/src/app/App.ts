import {CSVFileReader} from "./reader/CSVFileReader";
import {MatchResults} from "./common/MatchResults";

export class App {


    private reader: CSVFileReader | undefined;
    private readonly matches: any;


    constructor() {
        console.log("init App...");
        try {
            this.reader = new CSVFileReader("./football.csv");
            this.matches = this.reader.data;
        } catch (error) {
            if (error instanceof Error) {
                console.log("App Error : ", error.message);
            }

        }

    }

    public runProcess() {
        if (!!this.matches && this.matches.length > 0) {

            console.log("Total records : ", this.matches.length);

            let manUnitedWins = 0;


            for (let match of this.matches) {
                //  console.log(match);
                if (match[1] === "Man United" && match[5] === MatchResults.HomeWin) {
                    manUnitedWins = manUnitedWins + 1;
                } else if (match[2] === "Man United" && match[5] === MatchResults.AwayWin) {
                    manUnitedWins = manUnitedWins + 1;
                }
            }

            console.log(`Man United won ${manUnitedWins} games.`);
        } else {
            console.log("No records");
        }
    }
}