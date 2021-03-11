const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const app = express();

app.use('/graphql', graphqlHTTP({
    graphiql: true
}));

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`listening on port ${port}` )
});