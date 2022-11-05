import { Link } from 'react-router-dom';
/*
import logo from '../../assets/logo.svg'; */
import { CartWidget } from '../CartWidget/CartWidget';
import './NavBar.css';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg position-sticky">
            <div className="container-fluid">
                <Link to='/' className='navbar-brand'>Fandom</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-5 gap-4">
                        <Link to='/' className="nav-link text-uppercase fw-bold link-dark px-0">Inicio</Link>
                        <Link to='/category/oversize' className="nav-link text-uppercase fw-bold link-dark px-0">Oversize</Link>
                        <Link to='/category/cropped' className="nav-link text-uppercase fw-bold link-dark px-0">Cropped</Link>
                    </div>
                </div>
            </div>
            <CartWidget/>
        </nav>
    );
}