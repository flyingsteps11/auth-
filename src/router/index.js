import React from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import Login from "../containers/Auth/Login.js";
import {MAIN_LINK} from "./link";
import Main from "../containers/mainContent/main.js";
function MyRouter() {
    return (
        <Switch>
            <Route path= {MAIN_LINK} component={Main}/>
            <Route path = '*' component={Login}/>
        </Switch>
    );
}
export default MyRouter