import { NextPage } from 'next';
import Link from 'next/link';

const Page404: NextPage = (): JSX.Element => (
  <div className="container text-center">
    <h1>404</h1>
    <h2>Page not found</h2>
    <p>
      <Link href="/">Back to main page</Link>
    </p>
  </div>
);

export default Page404;
