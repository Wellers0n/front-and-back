import React, {Component} from 'react'
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom'
import tinderLogo from './../images/tinder-logo.png';
import mulher from './../images/mulher.png';
import './../css/App.css';
import Login from './../components/login'

class Home extends Component{

    render(){
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
                            <Link to="/login">LOG IN</Link>
                        </div>
                    </header>
                    <Switch>
                        <Route path="/" exact component={Initial}/>
                        <Route path="/login" render={() => <Login history={this.props.history}/>}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

const Initial = (props) => {
    return (
        <main>
            {console.log(props)}
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

export default Home