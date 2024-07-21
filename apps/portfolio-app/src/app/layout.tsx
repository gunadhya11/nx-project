import { ApolloWrapper } from '../lib/apollo-wrapper';
import './global.css';
import Header from '../app/components/header';
export const metadata = {
  title: 'Welcome to portfolio-app',
  description: 'Generated by create-nx-workspace',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ApolloWrapper>
          <Header />
          <div className="wrapper">
            <div className="container">{children}</div>
          </div>
        </ApolloWrapper>
      </body>
    </html>
  );
}