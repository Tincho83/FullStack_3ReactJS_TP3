import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './Item.css'
import { Image, Card, Box, Divider, Grid, GridItem, ButtonGroup, Button, CardHeader, Text, Heading, Flex, CardBody, CardFooter, Stack, useBreakpointValue } from '@chakra-ui/react'

import { Link as ChakraLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom'

const Item = ({ id, nombre, categoria, marca, precio, envdisponible, stock, imagen }) => {
    let envio = false;

    if (envdisponible == true) {
        envio = "Si"
    }

    return (
        <Flex>
            <Card maxW='sm' className='CardItem'>
                <CardBody className='Header'>
                    <Image src={imagen} alt={nombre} borderRadius='lg' className='ImgPic'/>
                    <Stack className='ItemData' mt='6' spacing='3'>
                        <Text>{categoria}</Text>
                        <Heading size='md'>{nombre} {marca}</Heading>
                        <Text color='blue.600' fontSize='2xl'>${precio}</Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter className='ItemCardFooter'>
                    <Box>
                        <ButtonGroup spacing='32'>

                            <Button className='detalleItemButton' variant='solid' colorScheme='blue'>
                                <Link to={`/producto/${id}`}>Ver Detalle</Link>
                            </Button>
                        </ButtonGroup>
                    </Box>
                </CardFooter>
            </Card>
        </Flex>
    )
}

export default Item

/*
 
*/