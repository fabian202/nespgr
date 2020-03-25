import express from "express";
import { ApolloServer } from "apollo-server-express";
import "dotenv/config";
// import { db } from "./database";
import { sequelize } from "./database";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";
import { getTokenFromHeaders, verifyToken } from './utils/auth'

const app = express();

app.disable("x-powered-by");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  context: ({ req }) => {
    const token = getTokenFromHeaders(req);

    return {
      token,
      user: verifyToken(token)
    };
  }
});

server.applyMiddleware({ app });

app.get("/", (req, res) => {
  res.send("HELLO");
}); 

if (process.env.NODE_ENV !== "test") {
  //Sync postgres, Drop and re-sync db.
  sequelize.sync({ force: true }).then(() => {
    console.log("postgres up");
  });

  app.listen(5000, () => {
    console.log("listening on 5000");
  });
}

export default app;
