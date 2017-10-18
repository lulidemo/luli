/**
 *
 * title: route.js
 *
 * description: react-router的控制路由功能组件；负责所有的页面跳转
 *
 * author: liyang
 *
 * date: 2017/05/15
 */

import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const helloWorld = require('containers/HelloWorld');
const NotFoundPage = require('component/Common/404');
const AppRoute = () => (
    <Router history={browserHistory}>
        <Route path="/" >
            <IndexRoute component={helloWorld} />
            <Route path="*" component={NotFoundPage} />
        </Route>
    </Router>
);

export default AppRoute;
