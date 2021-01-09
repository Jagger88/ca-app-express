const { prisma } = require('./db') // to instatiate the prisma client
const { gql } = require('apollo-server')

const typeDefs = gql`

scalar Date
scalar DateTime

type User {
    id:  Int
    created_at:  DateTime
    email: String
    lastNodeActivity: String
    password:       String
    resetpwexpire:  String
    resetpwtoken:   String
    totalSpace:     Int
    uniqueKey:      String
    upStringd_at:     String
    usedSpaceDoc:   Int 
    usedSpaceImg:   Int 
    usedSpaceVid:   Int 
    activeNode_id:  Int 
    avatar_file_id: Int 
    forcePasswordChange:                    Int 
    invalidLoginAttempts:                   Int 
    firstTimeUser:  Int 
    isBlocked:      Int 
    lastSeen:       String 
    isLocked:       Int 
    lastCheckWithRecurly:                  String 
    organization_id: Int 
    displayQuickStart:                 Int 
  } 
 
  type Query {
    allUsers: [User!]!
  }

  type Mutation {
    # createUser(data: UserCreateInput!): User!
    createUser(email: String!): User!
  }

  # input UserCreateInput {
  #   email: String!
  # }

  # input PostCreateWithoutAuthorInput {
  #   content: String
  #   published: Boolean
  #   title: String!
  # }

`

const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');

  const resolvers = {  
    Date: new GraphQLScalarType({
      name: 'Date',
      description: 'Date custom scalar type',
      parseValue(value) {
        return new Date(value); // value from the client
      },
      serialize(value) {
        return value.getTime(); // value sent to the client
      },
      parseLiteral(ast) {
        if (ast.kind === Kind.INT) {
          return parseInt(ast.value, 10); // ast value is always in string format
        }
        return null;
      },
    }),

    DateTime: new GraphQLScalarType({
      name: 'DateTime',
      description: 'A date and time, represented as an ISO-8601 string',
      serialize: (value) => value.toISOString(),
      parseValue: (value) => new Date(value),
      parseLiteral: (ast) => new Date(ast.value)
    }),
  


    Query: {
    allUsers: () => {
      return prisma.user.findMany() },
    },
    Mutation: {
        createUser: (parent, args) => {
          mydate = new Date();

          return prisma.user.create({
            data: {
              email: args.email,
              created_at: mydate,
            },
          })
        },
      },

}

module.exports = {
  resolvers,
  typeDefs,
}

