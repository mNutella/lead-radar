import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:8000/graphql',
});

const client = new ApolloClient({
  link,
  cache,
  fetchOptions: {
    mode: 'no-cors',
  },
});

export default client;
