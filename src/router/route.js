/**
 *
 * title: route.js
 *
 * description: react-router的控制路由功能组件；负责所有的页面跳转
 *
 * author: luli
 *
 * date: 2017/05/15
 */

import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const helloWorld = require('containers/HelloWorld');
const NotFoundPage = require('component/Common/404');
const Chart = require('containers/Chart');
const Map = require('containers/Map')
const AppRoute = () => (
    <Router history={browserHistory}>
        <Route path="/">
            {/*<IndexRoute component={helloWorld} />*/}
            <Route path="chart" component={Chart}/>
            <Route path="map" component={Map}/>
            <Route path="*" component={NotFoundPage} />
        </Route>
    </Router>
);

export default AppRoute;
