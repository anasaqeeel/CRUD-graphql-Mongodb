const { ApolloServer } = require('apollo-server');
const connectDB = require('./db');
const typeDefs = require('./type_def');
const resolvers = require('./resolver');

connectDB();

//schema and resolver
const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
