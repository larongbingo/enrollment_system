/**
 * Copy this file or the contents and replace the texts within
 * the angled brackets with their corresponding value
 */

export const DATABASE_CONFIG = {
  database: "<name of the database in the mysql server>",
  username: "<username of the account in the mysql server>",
  password: "<password of the account in the mysql server>",
};

export const AUTH_CONFIG = {
  bcrypt_secret: "<a word or something very long>",
  jwt_key: "<a word or something very large>",
};

const config = {
  DATABASE_CONFIG,
  AUTH_CONFIG,
};

export default config;
