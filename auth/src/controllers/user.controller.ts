import "reflect-metadata"
import { inject, injectable } from "inversify"
import { userService } from "../services/user.service";
import { UserI } from "../interface/event.interface";


@injectable()
export class userController {

    private useri: UserI;
    constructor(@inject("UserI") useri : UserI){
       this.useri = useri
    }

    userCreate(){

    }
}