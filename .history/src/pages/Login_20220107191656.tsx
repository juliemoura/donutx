import ImagemPrincipal from '../assets/images/cabecalho.png'
import Logo from '../assets/images/logo.svg'
import Menu from '../assets/images/menu.svg'

import { Link, useNavigate } from 'react-router-dom';

import Mouse from '../assets/images/mouse.svg'
import Cart from '../assets/images/cart.svg'
import Alarm from '../assets/images/alarm.svg'
import Casa from '../assets/images/home.svg'
import GoogleIcon from '../assets/images/google.png'
import FacebookIcon from '../assets/images/facebook.png'
import TwitterIcon from '../assets/images/twitter.png'

import { Header } from '../components/Header'
import { Button } from '../components/Button'

import { useContext } from 'react';
import { AuthContext } from '../App';

import '../styles/auth.scss'
import '../styles/buttons.scss'
import '../styles/line.scss'
import '../styles/global.scss'

export function Login() {
    const { user, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    async function handleNextPrincipal() { /**para ir para a prox pagina */

        if (!user) {/**e o usuario nao estiver autenticado vai chamar a funcao signInwithgoogle, pois ele vai ser obrigado a fazer login */
            await signInWithGoogle()
        }
        navigate('/principal'); /** caso ele esteja logado, é só redirecionar */
    }

    return (
        <div>
            <div id="page-auth">

                <main>
                    <h1>Login</h1>
                    <div id="line"></div>
                    <button
                        onClick={handleNextPrincipal}
                        className="button-icon">
                        <img src={GoogleIcon} alt="Logo Google" />
                    </button>

                    {/** * <button
                        onClick={toFacebook}
                        className="button-icon">
                        <img src={FacebookIcon} alt="Logo Facebook" />
                    </button>

                    <button
                        onClick={toTwitter}
                        className="button-icon">
                        <img src={TwitterIcon} alt="Logo Twitter" />
                   </button>*/}

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
                    <Link to="/principal">
                        <Button
                            type="submit"
                            className="button-submit"
                        >
                            Entrar
                        </Button>
                    </Link>

                    <p id="forgot-password">Esqueceu sua senha? <b>Redefina agora.</b> </p>
                </div>
            </div>
        </div>
    )
}