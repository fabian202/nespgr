import Sequelize from "sequelize";
import bcrypt from "bcrypt";
import { sequelize } from "../database";

const saltRounds = 10;

const User = sequelize.define("users", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: Sequelize.STRING,
    unique: true
  },
  email: {
    type: Sequelize.STRING,
    unique: true
  },
  password: {
    type: Sequelize.STRING
  }
});

User.beforeCreate(function(user) {
  user.password = bcrypt.hashSync(user.password, saltRounds);
});

export default User;
