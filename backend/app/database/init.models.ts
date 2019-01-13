import { Sequelize } from "sequelize-typescript";

import User from "./models/user";

export function initModels(sequelize: Sequelize) {
  sequelize.addModels([
    User
  ]);
}

export default initModels;
