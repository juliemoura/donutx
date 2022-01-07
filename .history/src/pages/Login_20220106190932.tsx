import ImagemPrincipal from '../assets/images/cabecalho.png'
import Logo from '../assets/images/logo.svg'
import Menu from '../assets/images/menu.svg'

import { firebase, auth, database } from '../services/firebase';

import { Link } from 'react-router-dom';

import Mouse from '../assets/images/mouse.svg'
import Cart from '../assets/images/cart.svg'
import Alarm from '../assets/images/alarm.svg'
import Casa from '../assets/images/home.svg'
import GoogleIcon from '../assets/images/google.png'
import FacebookIcon from '../assets/images/facebook.png'
import TwitterIcon from '../assets/images/twitter.png'
import { Button } from '../components/Button'

import '../styles/auth.scss'
import '../styles/buttons.scss'
import '../styles/global.scss'

export function Login() {
    
    function toGoogle(){
        const provider = new firebase.auth.GoogleAuthProvider();

        auth.signInWithPopup(provider).then(result => {
            console.log(result);
        })
    }

    function toFacebook(){
        const provider = new firebase.auth.FacebookAuthProvider_Instance();

        auth.signInWithPopup(provider).then(result => {
            console.log(result);
        })
    }
    
    return (
        <>
            <img src={ImagemPrincipal} alt="Imagem Cabeçalho" id="img-header" />
            <div className='list-header'>
                <Link to="/"><img src={Logo} alt="Logo Donutx" id="logo-cabec" /></Link>
                <Link to="/login"><img src={Menu} alt="Menu" /></Link>
            </div>

            <div id="page-auth">

                <main>
                    <h1>Login</h1>
                    <div id="line"></div>
                    <button 
                    onClick={toGoogle}
                    className="button-icon">
                        <img src={GoogleIcon} alt="Logo Google" />
                    </button>

                    <button 
                    onClick={toFacebook}
                    className="button-icon">
                        <img src={FacebookIcon} alt="Logo Facebook" />
                    </button>

                    <button className="button-icon">
                        <img src={TwitterIcon} alt="Logo Twitter" />
                    </button>

                    <form>
                        <input
                            id="login"
                            type="text"
                        />

                        <input
                            id="passwords"
                            type="password"
                        />
                    </form>

                </main>

                <div className="password-container">
                    <input
                        type="checkbox"
                        id="check"
                    /><p className="remember-password">Lembrar minha senha</p>
                </div>

                <div>
                    <Button
                        type="submit"
                        className="button-submit"
                    >
                        Entrar
                    </Button>

                    <p id="forgot-password">Esqueceu sua senha? <b>Redefina agora.</b> </p>
                </div>
            </div>
        </>

    )
}