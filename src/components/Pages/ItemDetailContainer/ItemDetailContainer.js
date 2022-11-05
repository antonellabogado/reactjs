import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { ItemDetail } from "../../ItemDetail/ItemDetail";
import { Loader } from '../../Loader/Loader';

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const { productId } = useParams();

    useEffect(() => {
        const db = getFirestore()
        const queryDoc = doc(db, 'products', productId)
        getDoc(queryDoc)
        .then(res => setProduct({id: res.id, ...res.data()}))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    })

    return (
        <div className="item-detail-container pt-5 gx-0">
            {loading ?  <Loader/> : <ItemDetail product={product}/>}
        </div>
    );
}