const {gql} = require('graphql-tag');

//  It's a tagged template literal, used for wrapping GraphQL strings
//  This converts GraphQL strings into the format that Apollo libraries expect when working with operations and schemas, and it also enables syntax highlighting.
const typeDefs = gql`
  type Query{
      "Get spacecats list for homepage"
      tracks: [Track]
  }

  type Track{
      id: ID!
      title: String!
      author: Author
      thumbnail: String!
      length: Int!
      modulesCount : Int!
  }

  type Author{
      name: String!
      photo: String!
  }
`;

module.exports = typeDefs