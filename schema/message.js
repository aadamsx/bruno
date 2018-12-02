import { gql } from 'apollo-server-express';

// Construct a schema, using GraphQL schema language
export default gql`
  type Message {
    id: Int!
    text: String!
    user: User!
    channel: Channel!
  }

  type Mutation {
    createMessage(channelId: Int!, text: String!): Boolean!
  }
`;
