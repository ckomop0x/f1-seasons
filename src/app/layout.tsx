import Container from 'components/UI/Container';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Pavel Klochkov" />
        <title>F1 Standings</title>
      </head>
      <body>
        <Container>{children}</Container>
      </body>
    </html>
  );
}
