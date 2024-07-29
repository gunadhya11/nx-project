import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import Post from './models/blopost';
import connectDb from './config';
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  type BlogPost {
   title: String
   content: String
  }

  type Query {
    posts: [BlogPost]
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
  }

  type Mutation {
    addBook(title: String, author: String): Book
  }

  type Mutation {
    createPost(title: String, content: String): BlogPost
  }
`;
type Book = {
  title: string;
  author: string;
};
const books: Book[] = [];
type BlogPost = {
  title: string;
  content: string;
};
const posts: BlogPost[] = [];

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    books: () => books,
    posts: () => posts,
  },
  Mutation: {
    addBook: async (_: any, args: { author: any; title: any }) => {
      books.push({
        author: args.author,
        title: args.title,
      });
      try{
        console.log(Post)
        const newpost = await Post.create({
          title: args.title,
          author: args.author,
        });
        console.log(newpost);
      }
      catch(error){
        console.log(error)
      }
      
      return args;
    },
    createPost: (_: any, args: { content: any; title: any }) => {
      posts.push({
        content: args.content,
        title: args.title,
      });
      return args;
    },
  },
};

interface MyContext {
  token?: String;
}

connectDb();
// The ApolloServer constructor requires two parameters: your schema
// definition and yo  ur set of resolvers.
const server = new ApolloServer<MyContext>({ typeDefs, resolvers });

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  context: async ({ req }) => ({ token: req.headers.token }),
  listen: { port: 4000 },
});



console.log(`🚀  Server ready at: ${url}`);
