import { ReactComponent as GithubIcon } from '../../assets/img/github.svg'
import './styles.css';
export function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DsMovie</h1>
                    <a href="https://github.com/caioed77">
                        <div className="dsmovie-contact-container">
                            <GithubIcon />
                            <p className="dsmovie-contact-link">/CaioEd77</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    )
}