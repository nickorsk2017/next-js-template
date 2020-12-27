import {ReactNode} from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:4000/graphql"
});


export function ProvidersWrapper(props) {
  const {children} = props;
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
}