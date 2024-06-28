import React, { useState } from 'react'
import { Button, ButtonGroup, Flex, Box } from '@chakra-ui/react'
import './ItemCount.css'

const ItemCount = ({ stock, valorInicial, alAgregar }) => {
  const [count, setCount] = useState(valorInicial)

  console.log(stock)

  const incrementar = () => {
    count < stock && setCount(count + 1)
    console.log(typeof count);
  }

  const decrementar = () => {
    if (count > valorInicial) {
      count <= stock && setCount(count - 1);
    }

  }

  return (
    <Flex>
      <Flex className='botonesContarProd'>
        <Button colorScheme='blue' size='sm' variant='outline' onClick={decrementar}>-</Button>
        <Box id='boxCant'>
          {count}
        </Box>
        <Button colorScheme='blue' size='sm' variant='outline' onClick={incrementar}>+</Button>
      </Flex>
        <Button size='sm' className='botonAgregarCarrito' onClick={() => alAgregar(count)}>Agregar a Carrito</Button>


    </Flex>
  )
}

export default ItemCount

