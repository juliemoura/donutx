import { Link } from 'react-router-dom';

import { useContext } from 'react';
import { AuthContext } from '../App';

import { Header } from '../components/Header'
import { Button } from '../components/Button'

import '../styles/global.scss';
import '../styles/line.scss'
import '../styles/principal.scss';
import '../styles/buttons.scss'

import { Donut } from '../assets/images/big-donut.svg'

export function Principal() {
    const { user } = useContext(AuthContext);

    return (
        <div>
            <Header />
            <main id="page-principal">
                <h2>Olá <b>{user?.name}</b>!</h2>  {/**ponto de interrogacao pq o user pode estar logado ou nao */}
                <h1>Selecione a tela desejada</h1>
                <div id="line-big"></div>

                <img src={Donut}/><h3>Catálogo de Donuts</h3>
                <h3>Fórum dos Donuts</h3>
                <h3>Fale conosco</h3>


            </main>
        </div>
    )

}