import { Container } from "inversify";

import CONSTANTS from "./constants";
import { AcademicTimeDataAccess, RequiredSessionDataAccess, 
  RoomDataAccess, ScheduleDataAccess, SessionDataAccess, SubjectDataAccess, 
  TokenDataAccess, UserDataAccess, UserDetailsDataAccess } from "./data.access";
import AcademicTime from "./database/models/academic.time";
import RequiredSession from "./database/models/required.session";
import Room from "./database/models/room";
import Schedule from "./database/models/schedule";
import Session from "./database/models/session";
import Subject from "./database/models/subject";
import Token from "./database/models/token";
import User from "./database/models/user";
import UserDetails from "./database/models/user.details";
import { IUserValidations } from "./interfaces/business.rules/IUserValidations";
import { IAccountRegistry } from "./interfaces/IAccountRegistry";
import { IAuth } from "./interfaces/IAuth";
import { IDataAccess } from "./interfaces/IDataAccess";
import { ISessionManager } from "./interfaces/ISessionManager";
import AccountRegistry from "./services/AccountRegistry";
import ArraySessionManager from "./services/ArraySessionManager";
import Authentication from "./services/Authentication";
import UserValidations from "./services/UserValidations";

/**
 * Holds the entire dependency graph of the project
 */
export const CONTAINER = new Container();

CONTAINER.bind<IDataAccess<AcademicTime>>(CONSTANTS.dataAccess.AcademicTime)
  .to(AcademicTimeDataAccess).inRequestScope();
CONTAINER.bind<IDataAccess<RequiredSession>>(CONSTANTS.dataAccess.RequiredSession)
  .to(RequiredSessionDataAccess).inSingletonScope();
CONTAINER.bind<IDataAccess<Room>>(CONSTANTS.dataAccess.Room).to(RoomDataAccess).inSingletonScope();
CONTAINER.bind<IDataAccess<Schedule>>(CONSTANTS.dataAccess.Schedule).to(ScheduleDataAccess).inSingletonScope();
CONTAINER.bind<IDataAccess<Session>>(CONSTANTS.dataAccess.Session).to(SessionDataAccess).inSingletonScope();
CONTAINER.bind<IDataAccess<Subject>>(CONSTANTS.dataAccess.Subject).to(SubjectDataAccess).inSingletonScope();
CONTAINER.bind<IDataAccess<Token>>(CONSTANTS.dataAccess.Token).to(TokenDataAccess).inSingletonScope();
CONTAINER.bind<IDataAccess<User>>(CONSTANTS.dataAccess.User).to(UserDataAccess).inSingletonScope();
CONTAINER.bind<IDataAccess<UserDetails>>(CONSTANTS.dataAccess.UserDetails).to(UserDetailsDataAccess).inSingletonScope();

CONTAINER.bind<ISessionManager>(CONSTANTS.services.SessionManager).to(ArraySessionManager).inSingletonScope();
CONTAINER.bind<IAuth>(CONSTANTS.services.Authentication).to(Authentication).inSingletonScope();
CONTAINER.bind<IUserValidations>(CONSTANTS.services.UserValidation).to(UserValidations).inSingletonScope();
CONTAINER.bind<IAccountRegistry>(CONSTANTS.services.AccountRegistry).to(AccountRegistry).inSingletonScope();

export default CONTAINER;
