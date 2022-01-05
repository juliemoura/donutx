import ImagemPrincipal from '../assets/images/4.svg'
import Mouse from '../assets/images/mouse.svg'
import Cart from '../assets/images/cart.svg'
import Alarm from '../assets/images/alarm.svg'
import Casa from '../assets/images/home.svg'

export function Home(){
    return(
        <div>
            <img src={ImagemPrincipal} alt="Imagem Cabeçalho"/>
            <h1>Como encomendar</h1>
            <h2>meu donut?</h2>

            <main>
                <img src={Mouse} alt="Imagem de um Cursor"/><h3>Faça seu pedido</h3>
                <img src={Cart} alt="Imagem de um Carrinho"/><h3>Conclua a compra</h3>
                <img src={Alarm} alt="Imagem de um Despertador"/><h3>Aguarde a encomenda</h3>
                <img src={Casa} alt="Imagem de uma Casa"/><h3>Receba em casa</h3>

                <button>Assinar Newsletter</button>
                <input type="text"></input>
            </main>
        </div>
    )
}