import React, {Component} from 'react';
import './css/App.css';
import tinderLogo from './images/tinder-logo.png'
import mulher from './images/mulher.png';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
// import PrivateRouter from './components/PrivateRouter'
import Login from './components/login'
import PrivateRouter from './components/PrivateRouter';

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <header>
                        <div className="logo">
                            <img src={tinderLogo} alt="logo"/>
                        </div>
                        <div className="nav">
                            <ul>
                                <li><Link to="/">HOME</Link></li>
                                <li><Link to="/match">MATCH</Link></li>
                                <li><Link to="/chat">CHAT</Link></li>
                            </ul>
                        </div>
                        <div className="login">
                            <Link to="login">LOG IN</Link>
                        </div>
                    </header>
                    <Switch>
                        <Route path="/" exact={true} component={Home} />
                        <Route path="/login" component={Login} />
                        <PrivateRouter path="/logado" component={Logado} />

                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}
const Logado = () => {
    return (
        <div>Logado</div>
    )
}


const Home = () => {
    return (
        <main>
            <div className='mainLeft'>
                <img src={mulher} alt="mulher"/>
            </div>
            <div className='mainRigth'>
                <p>Meet new and <br/>interesting <br/>people nearby</p>
                <li><Link to="signUP" className="buttonCadastrar">SIGN UP ONLINE</Link></li>
            </div>
        </main>
    )
}



export default App;
