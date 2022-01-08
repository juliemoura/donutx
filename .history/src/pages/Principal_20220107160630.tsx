import ImagemPrincipal from '../assets/images/cabecalho.png'
import Logo from '../assets/images/logo.svg'
import Logout from '../assets/images/logout.svg'

import { Link } from 'react-router-dom';

import '../styles/global.scss';
import '../styles/line.scss'
import '../styles/principal.scss';
import '../styles/buttons.scss'
import { useContext } from 'react';
import { AuthContext } from '../App';


export function Principal() {
    const { user } = useContext(AuthContext);

    return (
        <div>
            <img src={ImagemPrincipal} alt="Imagem Cabeçalho" id="img-header" />
            <div className='list-header'>
                <Link to="/"><img src={Logo} alt="Logo Donutx" id="logo-cabec" /></Link>

                <Link to="/login"><img src={Logout} className="logout" alt="Menu" /></Link>
            </div>

            <main id="page-principal">
                <h1>{user?.name}</h1>  {/**ponto de interrogacao pq o user pode estar logado ou nao */}
                <h1>Catálogo</h1>
                <div id="line"></div>

            </main>
        </div>
    )

}