import { useCartContext } from "../../context/cartContext";
import { Link } from 'react-router-dom';
import { CartProducts } from "../../CartProducts/CartProducts";

export const Cart = () => {
    const { cartlist, emptyCart, totalPrice } = useCartContext();
    
    return (
        <div>
            {cartlist.length===0? 
                <>
                <h4>Tu carrito está vacío.</h4>
                <Link to='/'>
                    <button>Ir a la tienda</button>
                </Link>
                </>
                :
                <>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Producto</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Subtotal</th>
                    </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        <CartProducts/>
                        <tr>
                            <th scope="row">Total: ${totalPrice()}</th>
                        </tr>
                    </tbody>
                </table>
                <Link to='/orderform'><button>Comprar</button></Link>
                <button onClick={emptyCart}>Vaciar carrito</button>
                </>
            }
        </div>
    );
}