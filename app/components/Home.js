/**
 * Created by André Fatia on 13-07-2015.
 */
import React from 'react';
import Profile from '../components/Profile';
import Router from 'react-router';

const Home = React.createClass({

    getInitialState () {
        return {
            places: [],
            bio: {},
            repos: []
        };
    },

    render () {
        return (
            <div className="mdl-grid">
                <div className="mdl-cell mdl-cell--4-col">
                    <Profile />
                </div>
                <div className="mdl-cell mdl-cell--4-col">
                    Repos Component
                </div>
                <div className="mdl-cell mdl-cell--4-col">
                    Notes Component
                </div>
            </div>
        );
    }
});

export default Home;