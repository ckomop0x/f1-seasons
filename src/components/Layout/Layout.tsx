import { GlobalStyles, NormalizeStyles } from '../styles';
import { Footer, Header } from '../index';
import ErrorBoundary from '../ErrorBoundary';
import { LayoutWrapper } from './styles';

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
