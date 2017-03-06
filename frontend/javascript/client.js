import d from 'debug';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from 'routes';
import app from './app';
import { provideContext } from 'fluxible-addons-react';

const debug = d('App');

d.enable('App, Fluxible, Fluxible:*');

debug('Rehydrating...');

app.rehydrate({}, (err, context) => {
    let isRehydrating = true;

    if (err) {
        throw err;
    }

    debug('React Rendering');

    const RouterWithContext = provideContext(Router);

    ReactDOM.render(
        <RouterWithContext
            context={context.getComponentContext()}
            history={browserHistory}
            onUpdate={function onUpdate() {
                if (isRehydrating) {
                    isRehydrating = false;
                    return;
                }
            }}
        >{routes}</RouterWithContext>,
        document.getElementById('app'),
        () => {
            debug('React Rendered');
        }
    );
});