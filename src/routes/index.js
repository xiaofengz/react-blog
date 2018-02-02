import React from 'react';

import Main from 'CONTAINERS/Main';
import Editor from 'CONTAINERS/Editor'
import EditorMarkdown from 'CONTAINERS/Editor/EditorMarkdown'
import Article from "CONTAINERS/MAIN/Article";
import Login from "CONTAINERS/Login";
import ArticleDetail from "CONTAINERS/ArticleDetail";

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
        <Route path='articleDetail/:id' component={ArticleDetail} />
        <Route path='writeArticle' component={Editor} />
        <Route path='markdown' component={EditorMarkdown} />
    </Route>
  </Router>
);

export default routes;