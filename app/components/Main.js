/**
 * Created by André Fatia on 13-07-2015.
 */
var React = require('react');
var RouteHandler = require('react-router').RouteHandler;

var Main = React.createClass({
    render: () => {
        'use strict';
        return (
            /* jshint ignore:start */
            <div className="mdl-layout mdl-js-layout">
                <main className="mdl-layout__content">
                    <div className="mdl-grid">
                        <div className="mdl-cell mdl-cell--4-col"></div>
                        <div className="mdl-cell mdl-cell--4-col">
                            <RouteHandler />
                        </div>
                        <div className="mdl-cell mdl-cell--4-col"></div>
                    </div>
                </main>
            </div>
            /* jshint ignore:end */
        );
    }
});

module.exports = Main;