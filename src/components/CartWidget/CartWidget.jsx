import { Box, Flex } from '@chakra-ui/react';
import React, {useContext} from 'react'
import { IoCartOutline } from "react-icons/io5";
import Contexto from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { obtenerCantidad } = useContext(Contexto)

  return (
    <Flex m='16px' justify={'center'} align={'center'}>
     <Link to='/carrito'><IoCartOutline /> </Link>
     <span> { obtenerCantidad() > 0 && obtenerCantidad() } </span> 
    </Flex>
  )
}

export default CartWidget
