import ImagemPrincipal from '../assets/images/cabecalho.png'
import Logo from '../assets/images/logo.svg'
import Menu from '../assets/images/menu.svg'

import { Link } from 'react-router-dom';

export function Principal() {
    return(
        <div>
            <img src={ImagemPrincipal} alt="Imagem Cabeçalho" id="img-header" />
            <div className='list-header'>
            <Link to="/"><img src={Logo} alt="Logo Donutx" id="logo-cabec" /></Link>

                <Link to="/login"><img src={Menu} alt="Menu"/></Link>
            </div>
        </div>
    )

}