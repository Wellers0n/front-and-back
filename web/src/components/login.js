import React, {Component} from 'react';
import './../css/App.css';
import tinderLogoWhite from './../images/tinder-white.png'

export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            senha: '',
        }
        this.logar = this.logar.bind(this);
    }

    async logar(e){
        e.preventDefault();
        try{
            const data = await fetch('http://127.0.0.1:8080/login', {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body:{
                    email: 'wellerson@gmail.com',
                    senha: '1234'
                }

            });
            const dataJson = await data.json();
            if(dataJson){
                localStorage.setItem('token', dataJson);
                console.log(dataJson);
            }
        } catch(err){
            console.log('ERROR: ' + err)

        }


    }

    render(){
        return(
            <div className="containerLogin">
                <form className="loginMain">
                    <img src={tinderLogoWhite} alt="logo"/>
                    <div>
                        <p>Email</p>
                        <input type="input" onChange={(text) => this.setState({email: text})}/>
                    </div>
                    <div>
                        <p>Senha</p>
                        <input type="input" onChange={(text) => this.setState({senha: text})}/>
                    </div>
                    <button onClick={this.logar}>Entrar</button>
                </form>
            </div>
        )
    }

}