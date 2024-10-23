import fs from "fs";
import {dateStringToDate} from "../utils/utils";
import {MatchResults} from "../common/MatchResults";

type MatchData = [Date, string, string, number, number, MatchResults, string];

export class CSVFileReader {
    data: MatchData[] = [];

    constructor(public filename: string) {
        console.log("input filename : ", this.filename);
        this.read();
    }

    public read(): void {
        console.log("read file : ", this.filename);

        try {
            if (fs.existsSync(this.filename)) {
                //file exists
                console.log("input file exits");
                this.data = fs.readFileSync(this.filename,
                    {"encoding": "utf-8"})
                    .split("\n")
                    .map((row: string): string[] => {
                        return row.split(",");
                    }).map((row: string[]): MatchData => {
                        //console.log(row);
                        return [
                            dateStringToDate(row[0]),
                            row[1],
                            row[2],
                            parseInt(row[3]),
                            parseInt(row[4]),
                            row[5] as MatchResults,
                            row[6]
                        ];
                    });
            } else {
                throw new Error("Invalid input file " + this.filename);
            }
        } catch (err) {
            //console.error("file read error : ", err);
            throw err;
        }


    }
}