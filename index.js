import { createServer } from "@graphql-yoga/node";
import resolvers from "./graphQL/resolvers.js";
import { loadFile } from "graphql-import-files";

const server = createServer({
  schema: {
    typeDefs: loadFile("./graphQL/schema.graphql"),
    resolvers: resolvers,
  },
});

server.start(() => {
  console.log("Graphql Server Runningggg");
});
