import {faker} from "@faker-js/faker";

export class User {
    private firstName: string;
    private lastName: string;
    private name: string;
    location: {
        lat: number;
        lng: number;
    }

    constructor() {
        this.firstName = faker.person.firstName();
        this.lastName = faker.person.lastName();
        this.name = this.firstName + " " + this.lastName;
        this.location = {
            lat: faker.location.latitude(),
            lng: faker.location.longitude(),
        }
    }
}

