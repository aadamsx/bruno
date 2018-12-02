import { gql } from 'apollo-server-express';

// Construct a schema, using GraphQL schema language
export default gql`
  type Team {
    owner: User!
    members: [User!]!
    channels: [Channel!]!
  }

  type Mutation {
    createTeam(name: String!): Boolean!
  }
`;
