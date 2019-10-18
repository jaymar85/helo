import React from 'react';
import {Switch, Route} from 'react-router-dom';
// Components
import Auth from './Components/Auth/Auth';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Post from './Components/Post/Post';

export default (
    <Switch>
        <Route component={Auth} path='/' />
        <Route component={Dashboard} path='/dashboard'/>
        <Route component={Form} path='/new'/>
        <Route component={Post} path='/post/:postid'/>
        <Route render={() => {
            return <h1>404 Not Found</h1>
        }} />
    </Switch>
)