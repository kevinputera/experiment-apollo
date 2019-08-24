import { gql } from "apollo-server";

export const schema = gql`
  type Query {
    todos: [Todo!]!
  }

  type Mutation {
    create(text: String!): Todo!
  }

  type Todo {
    id: Int!
    text: String!
    completed: Boolean!
  }
`;
