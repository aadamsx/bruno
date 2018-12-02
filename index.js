import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import path from 'path';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
import models from './models';

const typeFiles = fileLoader(path.join(__dirname, './schema'));
const typeDefs = mergeTypes(typeFiles);
const resolverFiles = fileLoader(path.join(__dirname, './resolvers'));
const resolvers = mergeResolvers(resolverFiles);

const server = new ApolloServer({ typeDefs, resolvers, context: { models, user: { id: 1 } } });

const app = express();
server.applyMiddleware({ app });

models.sequelize.sync().then(() => {
  app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));
});
