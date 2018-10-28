import * as React from 'react';
import styled from 'styled-components';
import Footer from '../Footer/index';
import Header from '../Header/index';
import Seasons from '../Seasons/index';
import {GlobalStyle} from '../styles/GlobalStyles';
import {NormalizeStyles} from '../styles/NormalizeStyles';

const Container = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    overflow: hidden;
    position: relative;
`;

const App = () => {
    return (
        <Container id="main-app">
            <NormalizeStyles/>
            <GlobalStyle/>
            <Header/>
            <Seasons/>
            <Footer/>
        </Container>
    )
};

export default App;