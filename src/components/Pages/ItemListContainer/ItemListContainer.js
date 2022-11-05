import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemList } from '../../ItemList/ItemList';
import { Loader } from '../../Loader/Loader';
import { bringProducts } from '../../../utilities/bringProducts';
import './ItemListContainer.css';

export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        bringProducts(categoryId, setProducts, setLoading);
    }, [categoryId]);

    return (
        <div className="item-list-container pt-5 row gx-0">
            {loading ?  <Loader/> : <ItemList products={products}/>}
        </div>
    );
}