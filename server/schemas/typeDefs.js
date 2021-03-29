const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    post: [Post]
    comment: [Comment]
  }

 type Post {
   _id: ID
  text: String
 } 
  
 type Category {
    _id: ID
    name: String
  }
  
  type Comment {
    _id: ID
    text: String
    post: [Post]
    user: [User]
  }
  
  type Auth {
    token: ID
    user: User
  }
  type Query {
    post: [Post]
    user: [User]
    comment: [Comment]
    
  }
  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addPost(post: [ID]!): Post
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updatePost(_id: ID!, quantity: Int!): Post
    login(email: String!, password: String!): Auth
  }




`;

module.exports = typeDefs;