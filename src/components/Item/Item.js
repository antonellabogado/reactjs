import { Link } from 'react-router-dom';
import './Item.css'

export const Item = ({product}) => {
    return (
        <div className="card col-md-3 bg-black border-0 rounded-0">
            <Link to={`/detail/${product.id}`}>
                <img src={product.img} className="card-img-top rounded-0" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title text-light">{product.name}</h5>
                    <p className="card-text text-light">${product.price}</p>
                </div>
            </Link>
        </div>
    );
}