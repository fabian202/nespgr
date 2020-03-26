import { expect } from "chai";
import "dotenv/config";
import { createTodo, getTodos } from "./api";
// import { sequelize } from "../../database";
import { User, Todo } from "../../models";
// import app from "../../index";
import { createToken } from "../../utils/auth";

describe("todos", () => {
  afterEach(async () => {
    await User.destroy({
      where: {}
    });

    await Todo.destroy({
      where: {}
    });
  });

  it("should create a todo", async () => {
    //Create an user
    const user = await User.create({
      username: "valid",
      email: "valid@valid.com",
      password: "123456"
    });

    //Create a token
    const token = createToken(user.toJSON());

    const todo = { todo: "make tests!" };

    const newTodo = await createTodo(todo, token.token);

    expect(newTodo).to.not.be.null;
  });

  it('should retrive todos', async () => {
    //Create an user
    const user = await User.create({
      username: "valid",
      email: "valid@valid.com",
      password: "123456"
    });

    //Create a token
    const token = createToken(user.toJSON());
    const userId = user.id;

    Todo.bulkCreate([
      {todo: "number 1", userId},
      {todo: "number 2", userId},
      {todo: "number 3", userId},
    ]) 

    const { data: { data }} = await getTodos(token.token);

    expect(data.getTodos).to.have.length.above(2);
  });

  // it('should delete a todo', () => {

  // });

  // it('should update a todo', () => {

  // });
});
