import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Hotel from "./pages/Hotel";
import Check from "./pages/Check";
import Smoll from "./pages/Small";
import Acount from "./pages/Acount";



class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Hotel} />
                    <Route path="/acount" component={Acount} />
                    <Route path="/find" component={Check} />
                    <Route path="/find/:page" component={Check} />
                    <Route path="/single" component={Smoll} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;