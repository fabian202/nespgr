import { expect } from "chai";
import "dotenv/config";
import { register, login } from "./api";
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

  it("it should login an user", async () => {
    //Create an user
    const newUser = {
      username: "valid",
      email: "valid@valid.com",
      password: "123456"
    };

    await User.create(newUser);

    let {
      data: { data }
    } = await login({
      email: "valid@valid.com",
      password: "123456"
    });

    expect(data.login).to.not.be.null;
  });

  it("it should reject an user", async () => {
    //Create an user
    const newUser = {
      username: "valid",
      email: "valid@valid.com",
      password: "123456"
    };

    await User.create(newUser);

    let {
      data: { data }
    } = await login({
      email: "valid@valid.com",
      password: "1234560"
    });

    expect(data.login).to.be.null;
  });
});
