import { useState } from "react";
import { useCartContext } from "../context/cartContext";
import { ItemCount } from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom';

export const ItemDetail = ({product}) => {
    const [isCount, setIsCount] = useState(true);
    const { addItem } = useCartContext();
    
    const onAdd = (amount) => {
        addItem({ ...product, amount })
        setIsCount(false)
    };

    return (
        <div className="card mb-3" key={product.id}> 
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={product.img} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">Buzo</p>
                        <p className="card-text">${product.price}</p>

                        { isCount ? 
                            <ItemCount onAdd={onAdd} stock={product.stock} init={1}/> 
                            : 
                            <>
                            <Link to='/'>
                                <button>Seguir comprando</button>
                            </Link>
                            <Link to='/cart'>
                                <button>Ir al carrito</button>
                            </Link>
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}