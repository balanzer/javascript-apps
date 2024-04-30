import fs from "fs";

export class CSVFileReader {
    data: string[][] = [];

    constructor(public filename: string) {
        console.log("filename : ", this.filename);
        this.read();
    }

    public read(): void {
        console.log("read file : ", this.filename);

        this.data = fs.readFileSync(this.filename,
            {"encoding": "utf-8"})
            .split("\n")
            .map((row: string): string[] => {
                return row.split(",");
            });

    }
}