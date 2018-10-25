import * as React from 'react';
import Footer from '../Footer/index';
import Header from '../Header/index';
import Seasons from '../Seasons/index';
import {mainContainer} from './app.css';

const App = () => {
    return (
        <div id="main-app" className={mainContainer}>
            <Header/>
            <Seasons/>
            <Footer/>
        </div>
    )
};

export default App;