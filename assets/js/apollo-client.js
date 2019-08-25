import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: process.env.APOLLO_URI,
});

const client = new ApolloClient({
  link,
  cache,
  fetchOptions: {
    mode: 'no-cors',
  },
});

export default client;
