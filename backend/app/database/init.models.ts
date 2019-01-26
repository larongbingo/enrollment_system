import { Sequelize } from "sequelize-typescript";

import AcademicTime from "./models/academic.time";
import RequiredSession from "./models/required.session";
import Room from "./models/room";
import Schedule from "./models/schedule";
import Session from "./models/session";
import Subject from "./models/subject";
import User from "./models/user";
import Token, { UserDetails } from "./models/user.details";
import UserSchedule from "./models/user.schedule";

/**
 * Adds all of the models to the given sequelize instance
 */
export function initModels(sequelize: Sequelize) {
  sequelize.addModels([
    AcademicTime,
    RequiredSession,
    Room,
    Schedule,
    Session,
    Subject,
    Token,
    UserDetails,
    UserSchedule,
    User,
  ]);
}

export default initModels;
