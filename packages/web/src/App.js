import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRouter from './components/PrivateRouter';
import Home from './screen/Home';
import {screenLogado} from './screen/logado'

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <PrivateRouter path="/logado" component={screenLogado}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
