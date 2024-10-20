import {UserEstonia} from "./UserEstonia";
import {UserLatvia} from "./UserLatvia";

export class Contract {

    title: string
    signed = false


    constructor(title: string, signed: boolean) {
        this.title = title;
        this.signed = signed;
    }

    signEstonia(user: UserEstonia) {
        return user.mobileIDAuthorization == true;
    }

    signLatvia(user: UserLatvia) {
        return user.mobileIDAuthorization == true;
    }
}