import { useCartContext } from "../context/cartContext";
import { Product } from "../Product/Product";

export const CartProducts = () => {
    const { cartlist } = useCartContext();
    return cartlist.map(prod => <Product key={prod.id} product={prod}/>)
}