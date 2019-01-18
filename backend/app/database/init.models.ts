import { Sequelize } from "sequelize-typescript";

import User from "./models/user";

/**
 * Adds all of the models to the given sequelize instance
 */
export function initModels(sequelize: Sequelize) {
  sequelize.addModels([
    User,
  ]);
}

export default initModels;
