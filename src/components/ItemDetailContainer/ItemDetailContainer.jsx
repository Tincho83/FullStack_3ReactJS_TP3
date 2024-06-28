import React, { useEffect, useState } from 'react'

import { obtenerProductosporID } from '../../data/datos'
import { Box, Flex } from '@chakra-ui/react'
import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useNavigate, useParams } from 'react-router-dom'
import { ClockLoader } from 'react-spinners'

const ItemDetailContainer = () => {


  const [producto, establecerProducto] = useState({})
  const [cargando, establecerCargando] = useState(true)
  const { productoId } = useParams()

  const navigate = useNavigate()

  useEffect(() => {
    obtenerProductosporID(productoId)
      .then((respuesta) => {
        if (!respuesta) {
          navigate('/*')
        } else {
          establecerProducto(respuesta)
        }
      })
      .catch((error) => console.error(error))
      .finally(() => establecerCargando(false))
  }, [productoId])

  return (
    <Flex className='ItemDetailContainer' justify={'center'}>
      <Box>
        {
          cargando ?
            <Flex justify={'center'} align={'center'} h={'50hv'}>
              <ClockLoader color="#89BBFE" />
            </Flex>
            :
            <ItemDetail {...producto} />

        }
      </Box>
    </Flex>
  )
}

export default ItemDetailContainer

/*

*/