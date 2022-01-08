import Facebook from '../assets/images/facebook.svg'
import Instagram from '../assets/images/instagram.svg'
import Twitter from '../assets/images/twitter.svg'

import { Button } from '../components/Button'
import { Link } from 'react-router-dom';

import '../styles/footer.scss';

export function Header() {

    return (
        <footer>
                <p id="footer-title">© 2021 Donutx | Todos os direitos reservados</p>
                <div id="socialmedia-container">
                    <a href="https://web.facebook.com/?_rdc=1&_rdr">
                        <Button
                            className="button-media"
                        ><img src={Facebook} className="media" />
                        </Button>
                    </a>
                    <a href="https://twitter.com">
                        <Button
                            className="button-media"
                        ><img src={Twitter} className="media" />
                        </Button>
                    </a>
                    <a href="https://instagram.com">
                        <Button
                            className="button-media"
                        ><img src={Instagram} className="media" />
                        </Button>
                    </a>
                </div>
                <a href="https://linkedin.com/juliemoura"><p id="developed-by">Developed by Julie Moura</p></a>
            </footer>

    )
}

