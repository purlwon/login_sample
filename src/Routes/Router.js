//라우트 설정
//경로별 컴포넌트 설정

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, Login } from './index';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
        </Switch>
    </BrowserRouter>
);

export default Router;