import ImagemPrincipal from '../assets/images/cabecalho.png'
import Logo from '../assets/images/logo.svg'
import Menu from '../assets/images/menu.svg'

export function Principal() {
    return(
        <div>
            <img src={ImagemPrincipal} alt="Imagem Cabeçalho" id="img-header" />
            <div className='list-header'>
            <Link to="/principal"><img src={Logo} alt="Logo Donutx" id="logo-cabec" /></Link>

                <Link to="/home"><img src={Menu} alt="Menu"/></Link>
            </div>
    )

}