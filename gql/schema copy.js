const { prisma } = require('./db') // to instatiate the prisma client
const { gql } = require('apollo-server')


const typeDefs = gql`
 type User {
    email: String!
    id: ID!
    name: String
    posts: [Post!]!
  }

  type Post {
    content: String
    id: ID!
    published: Boolean!
    title: String!
    author: User
  }

  type Query {
    feed: [Post!]!
    post(id: ID!): Post
  }

  type Mutation {
    createUser(data: UserCreateInput!): User!
    createDraft(authorEmail: String, content: String, title: String!): Post!
    publish(id: ID!): Post
  }

  input UserCreateInput {
    email: String!
    name: String
    posts: [PostCreateWithoutAuthorInput!]
  }

  input PostCreateWithoutAuthorInput {
    content: String
    published: Boolean
    title: String!
  }

`
// added to seed and test. Removed as we will pull this from the DB
// const posts = [
//     {
//       id: 1,
//       title: 'Subscribe to GraphQL Weekly for community news ',
//       content: 'https://graphqlweekly.com/',
//       published: true,
//     },
//     {
//       id: 2,
//       title: 'Follow DigitalOcean on Twitter',
//       content: 'https://twitter.com/digitalocean',
//       published: true,
//     },
//     {
//       id: 3,
//       title: 'What is GraphQL?',
//       content: 'GraphQL is a query language for APIs',
//       published: false,
//     },
//   ]
// this was without Prisma
// const resolvers = {
  // Query: {
  //   feed: (parent, args) => {
  //     return posts.filter((post) => post.published)
  //   },
  //   post: (parent, args) => {
  //     return posts.find((post) => post.id === Number(args.id))
  //   },
  // },

  // Mutation: {
  //   createDraft: (parent, args) => {
  //     posts.push({
  //       id: posts.length + 1,
  //       title: args.title,
  //       content: args.content,
  //       published: false,
  //     })
  //     return posts[posts.length - 1]
  //   },
  //   publish: (parent, args) => {
  //     const postToPublish = posts.find((post) => post.id === Number(args.id))
  //     postToPublish.published = true
  //     return postToPublish
  //   },
  // },
  // not sure what this section does...
  // Post: {
  //   content: (parent) => parent.content,
  //   id: (parent) => parent.id,
  //   published: (parent) => parent.published,
  //   title: (parent) => parent.title,
  // },
  // }



  // this is with Prisma 
  const resolvers = {
  Query: {
    feed: (parent, args) => {
      return prisma.post.findMany({
        where: { published: true },
      })
    },
    post: (parent, args) => {
      return prisma.post.findOne({
        where: { id: Number(args.id) },
      })
    },
  },

  Mutation: {
    createDraft: (parent, args) => {
      return prisma.post.create({
        data: {
          title: args.title,
          content: args.content,
          published: false,
          author: args.authorEmail && {
            connect: { email: args.authorEmail },
          },
        },
      })
    },
    publish: (parent, args) => {
      return prisma.post.update({
        where: { id: Number(args.id) },
        data: {
          published: true,
        },
      })
    },
    createUser: (parent, args) => {
      return prisma.user.create({
        data: {
          email: args.data.email,
          name: args.data.name,
          posts: {
            create: args.data.posts,
          },
        },
      })
    },
  },
  User: {
    posts: (parent, args) => {
      return prisma.user
        .findOne({
          where: { id: parent.id },
        })
        .posts()
    },
  },
  Post: {
    author: (parent, args) => {
      return prisma.post
        .findOne({
          where: { id: parent.id },
        })
        .author()
    },
  },
}

module.exports = {
  resolvers,
  typeDefs,
}

