import Container from 'components/UI/Container';
import Footer from 'components/UI/Footer';
import Header from 'components/UI/Header';
import { ReactNode } from 'react';

import '../styles/index.scss';
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Pavel Klochkov" />
        <title>F1 Standings</title>
      </head>
      <body>
        <Container>
          <Header />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
