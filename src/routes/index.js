import React from 'react';

import Main from 'CONTAINERS/Main';
import {
    Router,
    Route,
    IndexRoute,
    hashHistory
} from 'react-router';

const routes = (
    <Router history={hashHistory}>
    <Route path="/" component={Main}>
    
    </Route>
  </Router>
);

export default routes;