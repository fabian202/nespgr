import { AuthenticationError } from "apollo-server-express";
import { User } from "../models";
import { createToken } from "../utils/auth";

export default {
  Query: {
    users: (root, args, context, info) => {
      return User.findAll({});
    }
  },
  Mutation: {
    register: (root, args, context, info) => {
      return User.create(args);
    },
    login: async (root, { email, password }, context, info) => {
      const user = await User.findOne({ where: { email } });
      if (user && user.validatePassword(password)) {
        const token = createToken({ ...user.toJSON(), password: null });
        return token;
      } else {
        throw new AuthenticationError("invalid_credentials");
      }
    }
  }
};
