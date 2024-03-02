import {User} from "./app/User";
import {Company} from "./app/Company";
import {CustomMap} from "./app/CustomMap";


const customMap: CustomMap = new CustomMap("map");

for (let i = 0; i < 3; i++) {

    const newUser: User = new User();
    const newCompany: Company = new Company();
    customMap.addMaker(newUser);
    customMap.addMaker(newCompany);


}


