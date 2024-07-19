import { ApolloProvider } from '@apollo/client';
import createApolloClient from './apollo-client';
import './global.css';

export const metadata = {
  title: 'Welcome to portfolio-app',
  description: 'Generated by create-nx-workspace',
};
const client = createApolloClient();
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ApolloProvider client={client}>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ApolloProvider>
  );
}
