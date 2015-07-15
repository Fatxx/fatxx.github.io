/**
 * Created by André Fatia on 13-07-2015.
 */
const React = require('react');
const RouteHandler = require('react-router').RouteHandler;

const Main = React.createClass({
    render () {
        return (
            <div className="mdl-layout mdl-js-layout">
                <main className="mdl-layout__content">
                    <RouteHandler />
                </main>
            </div>
        );
    }
});

export default Main;