import { Sequelize } from "sequelize-typescript";

import User from "./models/user";
import Token from "./models/user.details";

/**
 * Adds all of the models to the given sequelize instance
 */
export function initModels(sequelize: Sequelize) {
  sequelize.addModels([
    User,
    Token,
  ]);
}

export default initModels;
