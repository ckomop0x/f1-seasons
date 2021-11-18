import { GlobalStyles, NormalizeStyles } from '../styles';
import ErrorBoundary from '../ErrorBoundary';
import { LayoutWrapper } from './styles';
import Footer from '../Footer';
import Header from '../Header';

interface LayoutProps {
  children: JSX.Element;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <LayoutWrapper id="main-app">
      <NormalizeStyles />
      <GlobalStyles />
      <Header />
      <ErrorBoundary>{children}</ErrorBoundary>
      <Footer />
    </LayoutWrapper>
  );
}
