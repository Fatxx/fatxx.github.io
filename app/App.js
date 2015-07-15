import React from 'react';
import Router from 'react-router';
import routes from './config/routes';

const renderApp = (Root) => {
    React.render(
        <Root />, document.getElementById('app')
    );
};

Router.run(routes, renderApp);