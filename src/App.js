import React from 'react';
import './App.css';


import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from "./component/page/HomePage/home-page";
import AboutPage from "./component/page/AboutPage/about-page";


function App() {
    return (
        <div>

            <Switch>
                <Route exact path='/' component={HomePage}  />
                <Route exact path='/:post_id' component={AboutPage}  />
            </Switch>

            </div>
    );
}

export default App;
