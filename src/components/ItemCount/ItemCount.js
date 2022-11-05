import { useState } from "react";

export const ItemCount = ({stock, init, onAdd}) => {
    const [count, setCount] = useState(init);

    const handleAdd = () => count < stock && setCount(count + 1);

    const handleRemove = () => count > init && setCount(count - 1);

    const handleOnAdd = () => onAdd(count);

    return (
        <div>
            <button onClick={handleRemove}>-</button>
            <p>{count}</p>
            <button onClick={handleAdd}>+</button>
            <button onClick={handleOnAdd}>Agregar al carrito</button>
        </div>
    );
} 