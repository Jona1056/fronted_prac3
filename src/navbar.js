import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
            <div className="container-fluid">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        <img
                            src="/log.svg"
                            alt="Logo"
                            width="30"
                            height="30"
                            className="d-inline-block align-text-top"
                        />
                        TypeWere
                    </NavLink>
                </div>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <NavLink to="/" style={{ textDecoration: 'none', color: 'white', marginRight: '10px' }}>
                            Login
                        </NavLink>
                        <NavLink to="/crear" style={{ textDecoration: 'none', color: 'white', marginRight: '10px' }}>
                            Crear
                        </NavLink>
                        <NavLink to="/eliminar" style={{ textDecoration: 'none', color: 'white', marginRight: '10px' }}>
                            Eliminar
                        </NavLink>
                        <NavLink to="/modificar" style={{ textDecoration: 'none', color: 'white', marginRight: '10px' }}>
                            Modificar
                        </NavLink>
                        <NavLink to="/buscar" style={{ textDecoration: 'none', color: 'white', marginRight: '10px' }}>
                            Buscar
                        </NavLink>





                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;