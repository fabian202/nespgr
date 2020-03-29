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
      };

      return Todo.create(todo);
    },
    deleteTodo: async (root, { id }, { user }, info) => {
      //Delete the todo that belongs to me!
      const deleted = await Todo.destroy({ where: { id, userId: user.id } });
      return deleted ? true : false;
    },
    updateTodo: async (root, { id, todo }, { user }, info) => {
      const updated = await Todo.update(
        { todo },
        { where: { id, userId: user.id } }
      );
      return updated ? true : false;
    }
  }
};
