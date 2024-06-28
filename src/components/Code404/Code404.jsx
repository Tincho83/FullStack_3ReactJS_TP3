import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import './Code404.css'
import { Link } from 'react-router-dom'
import { HiOutlineHome } from "react-icons/hi2";

const Code404 = () => {
    return (
        <Box>
            <p className='tituloError'>Error 404: Pagina No Encontrada</p>
            <p className='subtituloError'>Lo siento, la página que estás buscando no se pudo encontrar, revise la direccion web o url.</p>
            <Flex>
                <Heading > <Link to='/'> Volver a la pagina de Inicio </Link> </Heading>
            </Flex>
        </Box>
    )
}

export default Code404
