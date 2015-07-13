/**
 * Created by André Fatia on 13-07-2015.
 */
var React = require('react');
var Profile = require('../components/Profile');
var Router = require('react-router');

var Portfolio = React.createClass({
    getInitialState: () => {
        'use strict';
        return {
            places: [],
            bio: {},
            repos: []
        };
    },
    render: () => {
        'use strict';
        return (
            /* jshint ignore:start */
            <div className="row">
                <div className="col-md-4">
                    <Profile />
                </div>
                <div className="col-md-4">
                    Repos Component
                </div>
                <div className="col-md-4">
                    Notes Component
                </div>
            </div>
            /* jshint ignore:end */
        );
    }
});

module.exports = Portfolio;