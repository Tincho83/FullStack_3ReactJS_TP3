import React, { useContext, useState } from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { ToastContainer, toast } from 'react-toastify';
import { Image, Card, Box, Divider, Grid, GridItem, ButtonGroup, Button, CardHeader, Text, Heading, Flex, CardBody, CardFooter, Stack, useBreakpointValue, useConst } from '@chakra-ui/react'

import { Link as ChakraLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom'
import Contexto from '../../context/CartContext';

const ItemDetail = ({ id, nombre, descripcion, categoria, marca, precio, envdisponible, stock, imagen }) => {

    const [cant, establecerCantidad] = useState(0)
    const { agregarItem } = useContext(Contexto)

    let envio = "No";

    if (envdisponible == true) {
        envio = "Si"
    }

    const alAgregar = (cantidad) => {
        const item = { id, nombre, precio }

        agregarItem(item, cantidad)
        if (cantidad > 1) {
            toast.success(`Agregaste ${cantidad} unidades.`, { position: "top-center", autoClose: 3000 });
        }
        else {
            toast.success(`Agregaste ${cantidad} unidad.`, { position: "top-center", autoClose: 3000 });
        }
        establecerCantidad(cantidad)
    }

    return (
        <Flex>
            <Card maxW='sm' className='CardItem'>
                <CardBody className='Header'>
                    <Image src={imagen} alt={nombre} borderRadius='lg' className='ImgPic' />
                    <Stack className='ItemData' mt='6' spacing='3'>
                        <Text>{categoria}</Text>
                        <Heading size='md'> {marca} {nombre} </Heading>
                        <Text color='blue.600' fontSize='2xl'>${precio}</Text>
                        <Text color='blue.600' fontSize='1xl'>Disponibilidad: {stock}  &nbsp;&nbsp;&nbsp; Envio a Domicilio: {envio}</Text>
                        <Text color='black.900' fontSize='19px'> {descripcion} </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <Box className='ItemCardText' color='blue.600' fontSize='1xl'>
                    <Text className='ItemCantText'>Cantidad:</Text>
                    <ItemCount stock={stock} valorInicial={1} alAgregar={alAgregar} />
                    <ToastContainer />
                </Box>
                <Divider />
                <CardFooter className='ItemCardFooter'>
                    <Box>
                        {
                            cant > 0 ?
                                <Flex>
                                    <ButtonGroup spacing='3'>
                                        <Button className='itemButton' variant='solid' colorScheme='teal'> <Link to='/'> Seguir Comprando </Link> </Button>
                                    </ButtonGroup>
                                    <ButtonGroup spacing='3'>
                                        <Button className='itemButton' variant='solid' colorScheme='teal'> <Link to='/carrito'> Ir al Carrito </Link> </Button>
                                    </ButtonGroup>
                                </Flex>
                                :
                                <ButtonGroup spacing='3'>
                                    <Button className='itemButton' variant='solid' colorScheme='teal'> <Link to='/'> Volver a todos los productos </Link> </Button>
                                </ButtonGroup>

                        }
                    </Box>

                </CardFooter>
            </Card>
        </Flex>

    )
}

export default ItemDetail


/*
 return (
        <Flex>
            <Card maxW='sm' className='CardItem'>
                <CardBody className='Header'>
                    <Image src={imagen} alt={nombre} borderRadius='lg' />
                    <Stack className='ItemData' mt='6' spacing='3'>
                        <Text>{categoria}</Text>
                        <Heading size='md'> {marca} {nombre} </Heading>
                        <Text color='blue.600' fontSize='2xl'>${precio}</Text>
                        <Text color='blue.600' fontSize='1xl'>Disponibilidad: {stock}  &nbsp;&nbsp;&nbsp; Envio a Domicilio: {envio}</Text>
                        <Text color='black.900' fontSize='19px'> {descripcion} </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter className='ItemCardFooter'>
                    <Box>
                        <ButtonGroup spacing='3'>
                            <Button className='itemButton' variant='solid' colorScheme='teal'>Comprar</Button>
                        </ButtonGroup>
                    </Box>
                    <Box className='ItemCardText' color='blue.600' fontSize='1xl'>
                        <Text className='ItemCantText'>Cantidad:</Text>
                        <ItemCount stock={stock} valorInicial={1} alAgregar={alAgregar}/>
                        <ToastContainer />
                    </Box>
                </CardFooter>
            </Card>
        </Flex>

    )

*/
