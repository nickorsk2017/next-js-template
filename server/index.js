import express from 'express';
import apollo from 'apollo-server-express';
import schemes from './graphQL/schemes/index.js';
import resolvers from './graphQL/resolvers/index.js';

const PORT = 4000;
const app = express();
const { ApolloServer } = apollo;

const server = new ApolloServer({
    typeDefs: schemes,
    resolvers: resolvers,
});

server.applyMiddleware({ app });


app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
});
