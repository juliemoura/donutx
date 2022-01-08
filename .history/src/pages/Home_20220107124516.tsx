import ImagemPrincipal from '../assets/images/cabecalho.png'
import Logo from '../assets/images/logo.svg'
import Menu from '../assets/images/menu.svg'

import { useContext } from 'react'; /**para recuperar o valor de um contexto*/

import { Link } from 'react-router-dom';

import Mouse from '../assets/images/mouse.svg'
import Cart from '../assets/images/cart.svg'
import Alarm from '../assets/images/alarm.svg'
import House from '../assets/images/house.svg'
import Splash from '../assets/images/splash.svg'
import Donut from '../assets/images/big-donut.svg'

import '../styles/buttons.scss';
import { Button } from '../components/Button'

import '../styles/home.scss';
import '../styles/global.scss';

import { TestContext } from '../App'


export function Home() {
    const value = useContext(TestContext)
    return (
        <div>
            <img src={ImagemPrincipal} alt="Imagem Cabeçalho" id="img-header" />
            <div className='list-header'>
            <Link to="/"><img src={Logo} alt="Logo Donutx" id="logo-cabec" /></Link>

                <Link to="/login"><img src={Menu} alt="Menu"/></Link>
            </div>


            <main id="page-home">
                <div>
                    <h1 className="title-principal">Como encomendar</h1>
                    <h2 className="subtitle-principal">meu donut?</h2>
                    <div className="panel-left">
                        <img src={Mouse} alt="Imagem de um Cursor" className="img-svg" /><h3>Faça seu pedido</h3>
                    </div>
                    <div className="panel-left">
                        <img src={Cart} alt="Imagem de um Carrinho" className="img-svg" /><h3>Conclua a compra</h3>
                    </div>
                    <div className="panel-left">
                        <img src={Alarm} alt="Imagem de um Despertador" className="img-svg" /><h3>Aguarde</h3>
                    </div>
                    <div className="panel-left">
                        <img src={House} alt="Imagem de uma Casa" className="img-svg" /><h3>Receba</h3>
                    </div>
                </div>

                <aside>
                    <img src={Splash} />
                </aside>
                <div>
                    <img src={Donut} id="donut" />
                </div>
                <div id="newsletter">
                    <Button
                        type="submit"
                        className="button-newsletter"
                    >
                        <p>Assinar Newsletter</p>
                    </Button>
                    <input type="text"
                        id="input-newsletter" />
                </div>

            </main>
        </div>
    )
}