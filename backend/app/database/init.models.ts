import { Sequelize } from "sequelize-typescript";

import Token from "./models/token";
import User from "./models/user";

export function initModels(sequelize: Sequelize) {
  sequelize.addModels([
    Token,
    User
  ]);
}

export default initModels;
