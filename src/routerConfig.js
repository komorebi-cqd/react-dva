import React from 'react'
import { routerRedux, NavLink, Route,Switch } from 'dva/router'
import Home from './pages/Home'
import Count from './pages/Count'


function routerConfig({history}){
    return (
        <routerRedux.ConnectedRouter history={history}>
            <div>
                <ul>
                    <li>
                        <NavLink to="/">首页</NavLink>
                    </li>
                    <li>
                        <NavLink to="/count">计数</NavLink>
                    </li>
                </ul>
                <Switch>
                    <Route path="/count" component={Count}/>
                    <Route path="/" component={Home}/>
                </Switch>
            </div>
        </routerRedux.ConnectedRouter>
    )
}


export default routerConfig;