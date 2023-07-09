function LinkNav(props) {

        return (
                <>
                        <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">{props.nombre}</a>
                        </li>
                </>
        )
}

export default LinkNav;