import { Link } from 'react-router-dom';

import { useContext } from 'react';
import { AuthContext } from '../App';

import { Header } from '../components/Header'
import { Button } from '../components/Button'

import '../styles/global.scss';
import '../styles/line.scss'
import '../styles/principal.scss';
import '../styles/buttons.scss'

export function Principal() {
    const { user } = useContext(AuthContext);

    return (
        <div>
            <Header />
            <main id="page-principal">
                <h2>Olá {user?.name}</h2>  {/**ponto de interrogacao pq o user pode estar logado ou nao */}
                <h1>Selecione a tela desejada</h1>
                <div id="line"></div>

            </main>
        </div>
    )

}