import CartWidget from "./CartWidget";
import LinkNav from "./LinkNav";
function NavBar(props) {

        return (
                <>
                        <nav className="navbar navbar-expand-lg bg-body-tertiary">
                                <div className="container-fluid">
                                <a className="navbar-brand" href="#">
                                                <img src="/img/logo cubo.png" alt="Logo" width="5%" className="d-inline-block align-text-top" />
                                                <img src="/img/letras.svg" alt="Logo" width="15%" className="d-inline-block align-text-top ms-3 mt-2" />
                                        </a>
                                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                                <span className="navbar-toggler-icon"></span>
                                        </button>
                                        <div className="collapse navbar-collapse" id="navbarNav">
                                                <ul className="navbar-nav">
                                                        <LinkNav nombre="Inicio" />
                                                        <LinkNav nombre="Acerca de nosotros" />
                                                        <LinkNav nombre="Catálogo" />
                                                        <LinkNav nombre="Contacto" />
                                                </ul>
                                        </div>
                                        <CartWidget />  
                                </div>
                        </nav>

                </>
        )
}

export default NavBar;