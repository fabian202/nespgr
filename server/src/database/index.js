import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  process.env.POSTGRES_DB,
  process.env.POSTGRES_USER,
  process.env.POSTGRES_PASSWORD,
  {
    host: process.env.POSTGRES_HOST,
    dialect: process.env.POSTGRES_DIALECT,
    logging: process.env.NODE_ENV !== "test" ? true : false,

    pool: {
      max: parseInt(process.env.POSTGRES_POOL_MAX),
      min: parseInt(process.env.POSTGRES_POOL_MIN),
      idle: process.env.POSTGRES_POOL_IDLE
    }
  }
);

// const db = {};

// db.Sequelize = Sequelize;
// db.sequelize = sequelize;

// export { db };