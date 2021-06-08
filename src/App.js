import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';

import CategoriesPage from './pages/CategoriesPage';

const App = () => {
    return (
        <BrowserRouter>
            <Route path="/" component={CategoriesPage} />
        </BrowserRouter>
    )
};

export default App;