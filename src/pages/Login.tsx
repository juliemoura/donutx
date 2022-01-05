import ImagemPrincipal from '../assets/images/cabec.svg'
import Logo from '../assets/images/logo.svg'
import Mouse from '../assets/images/mouse.svg'
import Cart from '../assets/images/cart.svg'
import Alarm from '../assets/images/alarm.svg'
import Casa from '../assets/images/home.svg'
import GoogleIcon from '../assets/images/google.png'
import FacebookIcon from '../assets/images/facebook.png'
import TwitterIcon from '../assets/images/twitter.png'

import '../styles/auth.scss'
import '../styles/buttons.scss'


export function Login() {
    return (
        <>
            <img src={ImagemPrincipal} alt="Imagem Cabeçalho" id="img-cabec" />
            <img src={Logo} alt="Logo Donutx" id="logo-cabec" />

            <div id="page-auth">

                <main>
                    <h1>Login</h1>
                    <div id="linha"></div>
                    <button className="buttonIcon">
                        <img src={GoogleIcon} alt="Logo Google" />
                    </button>

                    <button className="buttonIcon">
                        <img src={FacebookIcon} alt="Logo Facebook" />
                    </button>

                    <button className="buttonIcon">
                        <img src={TwitterIcon} alt="Logo Twitter" />
                    </button>

                    <form>
                        <input
                            id="login"
                            type="text"
                        />

                        <input
                            id="senha"
                            type="password"
                        />
                    </form>

                </main>

                <div className="senha-container">
                    <input
                        type="checkbox"
                        id="check"
                    /><p className="lembrar-senha">Lembrar minha senha</p>
                </div>

                <div>
                <button
                        className="botao-submit"
                        type="submit">
                        Entrar
                    </button>

                    <p id="senha-esquecida">Esqueceu sua senha? <b>Redefina agora.</b> </p>
                </div>

                <img src={ImagemPrincipal} alt="Imagem Cabeçalho" id="img-footer" />
            </div>
        </>

    )
}