import React, {Component} from 'react';
import Home from "./pages/home";
import UsersReg from './pages/usersReg'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Page404 from "./pages/page404";


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                   <Route exact path='/registration' component={UsersReg}/>
                    <Route  exact path='/' component={Home}/>
                   <Route component={Page404}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
