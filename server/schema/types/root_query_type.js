const graphql = require("graphql");
const { GraphQLObjectType, GraphQLID } = graphql;
const UserType = require("./user_type");

const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      resolve(parentValues, args, req) {
        return req.user; // if not logged  will return undefined which GraphQl returns as null
      }
    }
  }
});

module.exports = RootQueryType;
