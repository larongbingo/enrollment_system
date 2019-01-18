import { sequelize } from "../database/connection";

/**
 * npm run scripts:sync-tables
 * 
 * Updates the MySQL Server with the models in ../app/database/models/*
 */
(async function() {
  if(process.env.NODE_ENV === "production") {
    console.log("CANNOT RUN THIS ON A PRODUCTION SERVER;");
    process.exit(1);
  }
  
  try {
    // TODO: FIND AN ELEGANT SOLUTION TO DROP TABLES WITH RELATIONSHIPS
    console.log("DROPPING ALL PREVIOUS TABLES");
    await sequelize.query(`DROP DATABASE ${sequelize.options.database};`);
    await sequelize.query(`CREATE DATABASE ${sequelize.options.database};`);
    await sequelize.query(`USE ${sequelize.options.database};`);

    console.log("UPDATING TABLES");
    await sequelize.sync({force: true});
  }
  catch(err) {
    console.error(err);
    process.exit(2);
  }

  console.log("DONE");
  process.exit(0);
})();
