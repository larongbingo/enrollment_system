import { Sequelize } from 'sequelize-typescript';
import { DATABASE_CONFIG } from '../config';
import { initModels } from './init.models';

export const sequelize = new Sequelize({
  ...DATABASE_CONFIG,
  dialect: 'mysql'
});

initModels(sequelize);

export default sequelize;
