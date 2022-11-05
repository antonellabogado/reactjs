import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

export const bringProducts = (categoryId, setProducts, setLoading) => {
    const db = getFirestore();
    const queryCollection = collection(db, 'products');
    const queryFilter = categoryId ? query(queryCollection, where('category', '==', categoryId)) : queryCollection;

    getDocs(queryFilter)
    .then(res => setProducts(res.docs.map(prod => ({id: prod.id, ...prod.data()}))))
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
}