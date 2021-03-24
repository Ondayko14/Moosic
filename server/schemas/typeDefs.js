const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    posts: [Posts]
  }

 type Posts {
   _id: ID
  text: String
 } 
  
  
  type Auth {
    token: ID
    user: User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addPosts(posts: [ID]!): Posts
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updatePosts(_id: ID!, quantity: Int!): Posts
    login(email: String!, password: String!): Auth
  }




`;

module.exports = typeDefs;