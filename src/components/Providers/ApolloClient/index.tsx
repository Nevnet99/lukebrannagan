'use client';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  concat,
  HttpLink,
} from '@apollo/client';

export type TApolloProviderProps = {
  children: React.ReactNode;
};

const httpLink = new HttpLink({ uri: 'https://gapi.storyblok.com/v1/api' });

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      token: process.env.NEXT_PUBLIC_PREVIEW_STORYBLOK_TOKEN,
      version: 'draft',
    },
  }));

  return forward(operation);
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
  connectToDevTools: true,
});

export function AProvider({ children }: TApolloProviderProps) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
