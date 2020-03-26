import { Todo, User } from "../models";

export default {
  Query: {
    getTodos: (root, args, { user }, info) => {
      return Todo.findAll({
        where: { userId: user.id },
        include: [
          {
            model: User
          }
        ]
      });
    }
  },
  Mutation: {
    createTodo: (root, args, { user }, info) => {
      const todo = {
        todo: args.todo,
        userId: user.id
      }

      return Todo.create(todo);
    },
    deleteTodo: (root, args, { user }, info) => {
      return {
        todo: args.todo,
        userId: user.id
      };
    },
    updateTodo: (root, args, { user }, info) => {
      return {
        todo: args.todo,
        userId: user.id
      };
    },
  }
};
