/**
 * Created by André Fatia on 10-07-2015.
 */
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Welcome = React.createClass({
    render: () => {
        'use strict';
        return (
            /* jshint ignore:start */
            <div>
                <h1>Welcome</h1>
                <Link to="portfolio" title="Portfolio"> Portfolio </Link>
            </div>
            /* jshint ignore:end */
        );
    }
});

module.exports = Welcome;