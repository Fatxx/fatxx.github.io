var React = require('react');
var RouteHandler = require('react-router').RouteHandler;

var Main = React.createClass({
    render: function() {
        'use strict';
        return (
            /* jshint ignore:start */
            <div className="main-container">
                <nav className="navbar navbar-default" role="navigation">
                    <div className="col-sm-7 col-sm-offset-2">
                        MENU
                    </div>
                </nav>
                <div className="container">
                    <RouteHandler />
                </div>
            </div>
            /* jshint ignore:end */
        );
    }
});

module.exports = Main;
