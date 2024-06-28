import React from 'react'
import Item from '../Item/Item'
import { Flex, useBreakpointValue } from '@chakra-ui/react'
import './ItemList.css'

const ItemList = ({ productoss }) => {
  const direction = useBreakpointValue({ base: "column", md: "row" });

  return (
    <Flex direction={direction} wrap="wrap" className='GrupoLista'>
      {productoss.map(prod => <Item key={prod.id} {...prod} className="Item" />)}
    </Flex>

  )
}

export default ItemList
/*

*/
