import { AuthenticationError } from "apollo-server-express";
import { Todo, User } from "../models";

export default {
  Query: {
    todos: (root, { userId }, context, info) => {
      return Todo.findAll({
        where: { userId },
        include: [
          {
            model: User
          }
        ]
      });
    }
  },
  Mutation: {
    create: (root, args, context, info) => {
      const todo = Todo.create(args);
      return todo;
    }
  }
};
