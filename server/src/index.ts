import { ApolloServer } from "apollo-server";

import { schema } from "./schema";
import { queryResolver, mutationResolver } from "./resolvers";

const server = new ApolloServer({
  typeDefs: schema,
  resolvers: {
    Query: queryResolver,
    Mutation: mutationResolver
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
