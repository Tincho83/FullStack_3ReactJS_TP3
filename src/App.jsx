import React from 'react';
import './App.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { ChakraProvider } from '@chakra-ui/react'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import Code404 from './components/Code404/Code404';
import { CartContextProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';



function App() {
  {/* */ }

  return (
    <ChakraProvider>
      <CartContextProvider>
        <BrowserRouter>
          <Header />
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer title='Los Mejores Productos al Mejor Precio' />} />
            <Route path='/categoria/:categoriaId' element={<ItemListContainer title='Los Mejores Productos al Mejor Precio' />} />
            <Route path='/producto/:productoId' element={<ItemDetailContainer />} />
            <Route path='/carrito' element={<Cart />} />
            <Route path='*' element={<Code404 />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </CartContextProvider>
    </ChakraProvider>
  )
}

export default App

/*
    
*/