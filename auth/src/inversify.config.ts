import  { Container } from "inversify";
import  { userService } from "../src/services/user.service"
let container = new Container();

container.bind<userService>("userService").to(createuser);

export { Container }