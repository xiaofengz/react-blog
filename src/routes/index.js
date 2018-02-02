import React from 'react';

import Main from 'CONTAINERS/Main';
import Editor from 'CONTAINERS/Editor'
import EditorMarkdown from 'CONTAINERS/Editor/EditorMarkdown'
import Article from "CONTAINERS/MAIN/Article";
import Login from "CONTAINERS/Login";

import {
    Router,
    Route,
    IndexRoute,
    hashHistory
} from 'react-router';

const routes = (
    <Router history={hashHistory}>
    <Route path="/login" component={Login} />
    <Route path="/" component={Main}>
        <IndexRoute component={Article}/>
        <Route path='writeArticle' component={Editor} />
        <Route path='markdown' component={EditorMarkdown} />
    </Route>
  </Router>
);

export default routes;