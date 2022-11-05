import { useCartContext } from "../context/cartContext";

export const Product = ({product}) => {
    const { removeItem } = useCartContext();

    return (
        <tr>
            <th scope="row">{product.name}</th>
            <td>{product.price}</td>
            <td>{product.amount}</td>
            <td>{product.price*product.amount}</td>
            <td><button onClick={()=>removeItem(product.id)}>X</button></td>
        </tr>
    )
}