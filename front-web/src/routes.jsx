import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import RegisterUser from './pages/RegisterUser';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact/>
            <Route component={Login} path="/login"/>
            <Route component={RegisterUser} path="/registerUser"/>
        </BrowserRouter>
    )
}
export default Routes
