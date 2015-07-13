/**
 * Created by André Fatia on 13-07-2015.
 */
var React = require('react');

var Profile = React.createClass({
    render: () => {
        'use strict';
        return (
            /* jshint ignore:start */
            <div className="mdl-card mdl-shadow--4dp">
                <div className="mdl-card__media">
                    <img src="skytower.jpg" style={{width: 173, height: 157}}
                         border="0" alt="" style={{padding: "10px"}}/>
                </div>
                <div className="mdl-card__supporting-text">
                    Auckland Sky Tower, taken March 24th, 2014
                </div>
                <div className="mdl-card__supporting-text">
                    The Sky Tower is an observation and telecommunications tower located in Auckland,
                    New Zealand. It is 328 metres (1,076 ft) tall, making it the tallest man-made structure
                    in the Southern Hemisphere.
                </div>
            </div>
            /* jshint ignore:end */
        );
    }
});

module.exports = Profile;