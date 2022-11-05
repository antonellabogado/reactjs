import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useState } from 'react';
import { useCartContext } from "../../context/cartContext";

export const OrderForm = () => {
    const [id, setId] = useState('');
    const [dataForm, setDataForm] = useState({
        name: '',
        phone: '',
        email: ''
    });
    const { cartlist, emptyCart, totalPrice } = useCartContext();

    const createOrder = async(e) => {
        e.preventDefault();
        const order = {
            buyer: {
                name: dataForm.name,
                phone: dataForm.phone,
                email: dataForm.email
            },
            items: cartlist.map(prod => {
                const {id, name, price} = prod
                return {id, name, price}
            }),
            total: totalPrice()
            }
            const db = getFirestore();
            const orders = collection(db, 'orders');
            addDoc(orders, order)
            .then(resp => setId(resp.id))
            .catch(err => console.log(err))
            .finally(() => emptyCart())
        }

    const handleInputChange = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }    

    return (
        <div>
        <form onSubmit={createOrder}>
            <input type="text" name="name" placeholder="Nombre" onChange={handleInputChange} value={dataForm.name}></input>
            <input type="number" name="phone" placeholder="Telefóno" onChange={handleInputChange} value={dataForm.phone}></input>
            <input type="email" name="email" placeholder="Email" onChange={handleInputChange} value={dataForm.email}></input>
            <input type="email" name="email" placeholder="Verifique su email" onChange={handleInputChange} value={dataForm.email}></input>
            <button>Finalizar compra</button>
            {id && <h2>Compra realizada con éxito: {id}</h2>}
        </form>
        </div>
    );
}