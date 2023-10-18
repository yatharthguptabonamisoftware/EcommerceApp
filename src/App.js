
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import Checkout from './pages/Checkout';
import Checkout2 from './pages/Checkout2';
import Shippingadress from './components/Shippingadress';
import { FriendList } from './components/FriendList';
import Screenview from './components/UseScreenview';
import UseScreenview from './components/UseScreenview';
import { useState , useEffect } from 'react';

function App() {
 
   const is = UseScreenview();
  return (
    <div className="App">
     
    <BrowserRouter>

    <Navbar></Navbar>
 

    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/cart' element={<Cart></Cart>}></Route>
      <Route path='/checkout' element={<Checkout></Checkout>}></Route>
      <Route path='/checkout2' element={<Checkout2></Checkout2>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
