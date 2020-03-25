import { User } from '../models'

export default {
  Query: {
    users: (root, args, context, info) => {
      return User.findAll({});
    }
  },
  Mutation: {
    register: (root, args, context, info) => {
      return User.create(args);
    }
  }
}