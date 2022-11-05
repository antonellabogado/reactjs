import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/Pages/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/Pages/ItemDetailContainer/ItemDetailContainer';
import { NotFound404 } from './components/NotFound404/NotFound404';
import { CartContextProvider } from './components/context/cartContext';
import { OrderForm } from './components/Pages/OrderForm/OrderForm';
import { Cart } from './components/Pages/Cart/Cart';

function App() {
  return (
    <CartContextProvider>
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/' element={<ItemListContainer/>}></Route>
                <Route path='/category/:categoryId' element={<ItemListContainer/>}></Route> 
                <Route path='/detail/:productId' element={<ItemDetailContainer/>}></Route>
                <Route path='/cart' element={<Cart/>}></Route>
                <Route path='/orderform' element={<OrderForm/>}></Route>
                <Route path='/404' element={<NotFound404/>}></Route>
                <Route path='*' elemnt={<Navigate to='/404'/>}></Route>
            </Routes>
        </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
