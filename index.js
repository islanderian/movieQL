import { createServer } from "@graphql-yoga/node";
import resolvers from "./graphQL/resolvers.js";

const server = createServer({
  schema: {
    typeDefs: `
    type Query {
      name: String!
    }
    `,
    resolvers: resolvers,
  },
});

server.start(() => {
  console.log("Graphql Server Runningggg");
});
