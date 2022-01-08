import ImagemPrincipal from '../assets/images/cabecalho.png'
import Logo from '../assets/images/logo.svg'
import Logout from '../assets/images/logout.svg'

import { Link } from 'react-router-dom';

import '../styles/global.scss';
import '../styles/principal.scss';


export function Principal() {
    return(
        <div>
            <img src={ImagemPrincipal} alt="Imagem Cabeçalho" id="img-header" />
            <div className='list-header'>
            <Link to="/"><img src={Logo} alt="Logo Donutx" id="logo-cabec" /></Link>

                <Link to="/login"><img src={Logout} alt="Menu"/></Link>
            </div>
        </div>
    )

}