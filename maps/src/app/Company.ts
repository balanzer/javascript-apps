import {faker} from "@faker-js/faker";
import {Mappable} from "./CustomMap";

export class Company implements Mappable {

    private companyName: string;
    private catchPhrase: string;
    location: {
        lat: number;
        lng: number
    }

    constructor() {
        this.companyName = faker.company.name();
        this.catchPhrase = faker.company.catchPhrase();

        this.location = {
            lat: faker.location.latitude(),
            lng: faker.location.longitude()
        };
    }

    markerContent(): string {
        return `<div>
        <h1>${this.companyName}</h1>
        <h3>${this.catchPhrase}</h3>
        </div>`
    }

}