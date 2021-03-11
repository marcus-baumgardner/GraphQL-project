const graphql = require('graphql');

const { 

    GraphQLObjectType,
    GraphQLInt,
    GraphQLString

} = graphql;

const UserType = GraphQLObjectType({

    name: 'User',
    fields: {
        id: { type: GraphQLString },
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt },
    }

});