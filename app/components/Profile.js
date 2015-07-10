var React = require('react');
var Router = require('react-router');

var Profile = React.createClass({
    getInitialState: function () {
        'use strict';
        return {
            notes: [],
            bio: {},
            repos: []
        };
    },
    render: function() {
        'use strict';
        return (
            /* jshint ignore:start */
            <div className="row">
                <div className="col-md-4">
                    User Profile Component
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

module.exports = Profile;
