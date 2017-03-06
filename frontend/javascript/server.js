import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import expressState from 'express-state';
import path from 'path';
import { RouterContext, match, createMemoryHistory } from 'react-router';
import { provideContext } from 'fluxible-addons-react';
import _ from 'lodash';

import Html from 'components/Html';
import Routes from 'routes';
import app from './app';

const port = 9000;
const server = express();


expressState.extend(server);

server.use('/static', express.static(path.resolve(__dirname, '../../build')));

server.use((req, res) => {
  const location = createMemoryHistory().createLocation(req.url);
  const context = app.createContext();

  match({ Routes, location }, (error, redirectLocation, renderProps) => {
    if (redirectLocation) {
      res.redirect(301, redirectLocation.pathname + redirectLocation.search);
    } else if (error) {
      res.status(500).send(error.message);
    } else {
      // if (_.last(renderProps.routes).isNotFound) {
      //   res.status(404);
      // }

      const appState = app.dehydrate(context);
      appState.env = process.env.NODE_ENV || 'local';
      res.expose(appState, 'App');

      const props = Object.assign({}, renderProps, { context: context.getComponentContext() });

      const RouterComponent = provideContext(RouterContext, app.customContexts);
      const HtmlComponent = provideContext(Html, app.customContexts);

      const markup = ReactDOMServer.renderToString(
          React.createElement(RouterComponent, props)
      );

      const html = ReactDOMServer.renderToStaticMarkup(
              React.createElement(HtmlComponent, {
                  title: 'React - Webpack - Boiler!!',
                  context: context.getComponentContext(),
                  state: res.locals.state,
                  markup,
                  location,
              }
          ));

      res.send(`<!DOCTYPE html>${html}`);
    }
  });
});

server.listen(port, () => {
  console.log(`React app listening on port ${port}!`)
});