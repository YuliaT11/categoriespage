import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';

import MainPage from './pages/MainPage';
import './assets/SCSS/styles.scss';

const App = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={MainPage} />
        </BrowserRouter>
    )
};

export default App;