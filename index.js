const { ApolloServer } = require('apollo-server-express');

const express = require(`express`);
const app = express();
const PORT = process.env.PORT || 3001;

// how we actually instantiate our GraphQL Server.
// Must pass typedefs and resolvers to the object for server to start.
const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

app.listen(PORT, () => {
  console.log(`App is listening at http://localhost:${PORT}`);
});
