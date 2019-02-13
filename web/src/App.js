import React, {Component} from 'react';
import './css/App.css';
import tinderLogo from './images/tinder-logo.png'
import mulher from './images/mulher.png';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

class App extends Component {
    async componentWillMount() {
        const fet = await fetch('http://127.0.0.1:3000/user', {
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                email: 'wellerson@gmail.com',
                senha: '1234',
            })
        });
        let fetJson = await  fet.json();

        console.log(fetJson)
    }

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
                            <button >LOG IN</button>
                        </div>
                    </header>
                    <Switch>
                        <Route path="/" exact={true} component={Home} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

const Home = () => {
    return (
        <main>
            <div className='mainLeft'>
                <img src={mulher} alt="mulher"/>
            </div>
            <div className='mainRigth'>
                <p>Meet new and <br/>interesting <br/>people nearby</p>
                <button>SIGN UP ONLINE</button>
            </div>
        </main>
    )
}

export default App;
