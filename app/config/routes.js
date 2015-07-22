import React from 'react';
import Layout from '../layout/Layout';
import Welcome from '../welcome/Welcome';
import Bio from '../bio/Bio';
import Router from 'react-router';

const DefaultRoute = Router.DefaultRoute;
const Route = Router.Route;

const config = (
    <Route name="app" path="/" handler={Layout}>
        <Route name="bio" path="bio" handler={Bio} />
        <DefaultRoute handler={Welcome} />
    </Route>
);

export default config;