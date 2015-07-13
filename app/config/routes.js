var React = require('react');
var Main = require('../components/Main');
var Welcome = require('../components/Welcome');
var Portfolio = require('../components/Portfolio');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

module.exports = (
    <Route name="app" path="/" handler={Main}>
        <Route name="portfolio" path="portfolio" handler={Portfolio} />
        <DefaultRoute handler={Welcome} />
    </Route>
);
