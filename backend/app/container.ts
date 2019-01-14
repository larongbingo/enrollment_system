import { Container } from "inversify";

import CONSTANTS from "./constants";
import { TokenDataAccess, UserDataAccess } from "./data.access";
import Token from "./database/models/token";
import User from "./database/models/user";
import { IAuth } from "./interfaces/IAuth";
import { IDataAccess } from "./interfaces/IDataAccess";

export const CONTAINER = new Container();

CONTAINER.bind<IDataAccess<Token>>(CONSTANTS.dataAccess.Token).to(TokenDataAccess).inSingletonScope();
CONTAINER.bind<IDataAccess<User>>(CONSTANTS.dataAccess.User).to(UserDataAccess).inSingletonScope();

export default CONTAINER;
