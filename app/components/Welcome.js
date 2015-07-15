/**
 * Created by André Fatia on 10-07-2015.
 */
import React from 'react';
import Router from 'react-router';

const Link = Router.Link;

const Welcome = React.createClass({
    render () {
        return (
            <div className="mdl-grid">
                <div className="mdl-cell mdl-cell--4-col"></div>
                <div className="mdl-cell mdl-cell--4-col">
                    <h1>Welcome</h1>
                    <Link to="portfolio" title="Portfolio"> Portfolio </Link>
                </div>
                <div className="mdl-cell mdl-cell--4-col"></div>
            </div>
        );
    }
});

export default Welcome;