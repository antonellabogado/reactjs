import { Link } from 'react-router-dom';
import { useCartContext } from '../context/cartContext';
import './CartWidget.css';

export const CartWidget = () => {
    const { totalAmount } = useCartContext();
    return (
        <>
        <span className="cart-prod rounded-circle text-center">{totalAmount()!==0 && totalAmount()}</span>
        <Link to={'/cart'}>
            <button className="btn btn-lg me-2 carrito"><i className="bi bi-cart"></i></button>
        </Link>
        </>
    );
}