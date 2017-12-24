import React from 'react';

import Main from 'CONTAINERS/Main';
import Editor from 'CONTAINERS/Editor'
import EditorMarkdown from 'CONTAINERS/EditorMarkdown'

import {
    Router,
    Route,
    IndexRoute,
    hashHistory
} from 'react-router';

const routes = (
    <Router history={hashHistory}>
    <Route path="/" component={Main}>
        <Route path='writeArticle' component={Editor} />
        <Route path='markdown' component={EditorMarkdown} />
    </Route>
  </Router>
);

export default routes;