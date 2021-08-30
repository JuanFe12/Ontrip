import { UserI } from "../interface/event.interface";


export class userService implements UserI {

    constructor(){

    }

    createuser(){
        console.log('User create correctly');
    }
}