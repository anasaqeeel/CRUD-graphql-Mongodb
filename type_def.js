const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    getTodos: [Todo]
    getTodo(id: ID!): Todo
  }
  
  type Todo {
    id: ID!
    title: String
    status: Boolean
  }
  
  type Mutation {
    createTodo(title: String!, status: Boolean!): Todo
    updateTodo(id: ID!, title: String, status: Boolean): Todo
    deleteTodo(id: ID!): Todo
  }
`;

module.exports = typeDefs;
