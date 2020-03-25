import { expect } from "chai";
import "dotenv/config";
import { register } from "./api";
import { sequelize } from "../../database";
import { User } from "../../models";
import app from "../../index";

let server;
let connection;

before(async () => {
  connection = await sequelize.sync({ force: true });
  server = await app.listen(5000);
});

after(async () => {
  await connection.close();
  await server.close();
});

describe("users", () => {
  afterEach(async () => {
    await User.destroy({
      where: {}
    });
  });

  it("it should register an user", async () => {
    let {
      data: { data }
    } = await register({
      username: "stevehyuga",
      email: "stevehyuga@lachu.com",
      password: "asdasdasd"
    });

    const expectedUser = await User.findOne({
      where: {
        email: "stevehyuga@lachu.com"
      }
    });

    expect(data.register).to.eql({
      username: expectedUser.username,
      email: expectedUser.email
    });
  });
});
