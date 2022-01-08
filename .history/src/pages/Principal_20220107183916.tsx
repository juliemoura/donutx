import { Link } from 'react-router-dom';

import '../styles/global.scss';
import '../styles/line.scss'
import '../styles/principal.scss';
import '../styles/buttons.scss'
import { useContext } from 'react';
import { AuthContext } from '../App';

import { Header } from '../components/Header'
import { Button } from '../components/Button'


export function Principal() {
    const { user } = useContext(AuthContext);

    return (
        <div>
            <Header />
            <main id="page-principal">
                <h1>{user?.name}</h1>  {/**ponto de interrogacao pq o user pode estar logado ou nao */}
                <h1>Catálogo</h1>
                <div id="line"></div>

            </main>
        </div>
    )

}