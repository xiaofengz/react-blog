import React from 'react';

import Main from 'CONTAINERS/Main';
import Editor from 'CONTAINERS/Editor'
import EditorMarkdown from 'CONTAINERS/Editor/EditorMarkdown'
import Article from "CONTAINERS/MAIN/Article";
import Login from "CONTAINERS/Login";
import ArticleDetail from "CONTAINERS/ArticleDetail";
import PersonalSetting from"CONTAINERS/PersonalSetting"

import ArticleManage from"CONTAINERS/PersonalSetting/ArticleManage"
import UserManage from"CONTAINERS/PersonalSetting/UserManage"

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
        <Route path="personalSetting" component={PersonalSetting} >
            <Route path='userManage' component={UserManage} />
            <Route path='articleManage' component={ArticleManage} />
        </Route>
        <Route path='articleDetail/:id' component={ArticleDetail} />
        <Route path='writeArticle' component={Editor} />
        <Route path='markdown' component={EditorMarkdown} />
    </Route>
  </Router>
);

export default routes;