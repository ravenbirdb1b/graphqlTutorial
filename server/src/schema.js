const {gql} = require('graphql-tag');

const typeDefs = gql`
  type Query{
      "Get spacecats list for homepage"
      spaceCats: [SpaceCat]
  }

  type SpaceCat{
      id: ID!
      name: String!
      age: Int
      missions: [Mission]
  }

  type Mission{
      id : ID!
      name: String!
      description: String!
  }
`;

module.exports = typeDefs