import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { Footer, Header, Seasons } from './components';
import { Container, themeStyles, NormalizeStyles, GlobalStyles } from './components/styles';

class ErrorBoundary extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error: any, errorInfo: any) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state.errorInfo) {
      // Error path
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br/>
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}

const App: React.FunctionComponent = () => (
  <ThemeProvider theme={themeStyles}>
    <Container id="main-app">
      <NormalizeStyles />
      <GlobalStyles />
      <Header />
      <ErrorBoundary>
        <Seasons />
      </ErrorBoundary>
      <Footer />
    </Container>
  </ThemeProvider>
);

export default App;
