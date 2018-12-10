import * as React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import Footer from '../Footer/index';
import Header from '../Header/index';
import Seasons from '../Seasons/index';
import {GlobalStyle} from '../styles/GlobalStyles';
import {NormalizeStyles} from '../styles/NormalizeStyles';
import {themeStyles} from '../styles/themeStyles';
import {Container} from './AppStyles';

const App = () => {
    return (
        <ThemeProvider theme={themeStyles}>
            <Container id="main-app">
                <NormalizeStyles />
                <GlobalStyle />
                <Header />
                <Seasons />
                <Footer />
            </Container>
        </ThemeProvider>
    );
};

export default App;
