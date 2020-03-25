import Sequelize from "sequelize";
import { sequelize } from "../database";
import User from './user'

const Todo = sequelize.define("todos", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  todo: {
    type: Sequelize.STRING
  }
});

Todo.belongsTo(User);


export default Todo;
