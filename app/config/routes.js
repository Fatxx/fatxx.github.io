import React from 'react';
import Main from '../components/Main';
import Welcome from '../components/Welcome';
import Home from '../components/Home';
import Router from 'react-router';

const DefaultRoute = Router.DefaultRoute;
const Route = Router.Route;

const config = (
    <Route name="app" path="/" handler={Main}>
        <Route name="portfolio" path="portfolio" handler={Home} />
        <DefaultRoute handler={Welcome} />
    </Route>
);

export default config;