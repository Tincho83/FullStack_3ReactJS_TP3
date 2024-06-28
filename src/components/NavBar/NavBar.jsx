import React from 'react';
import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"

import { IoMdMenu } from "react-icons/io";
import { LuMilk } from "react-icons/lu";
import { GiMasonJar, GiSugarCane, GiButter, GiMilkCarton, GiCoffeeBeans } from "react-icons/gi";
import { PiCheese } from "react-icons/pi";
import { TbMilk, TbWorldSearch, TbCategory } from "react-icons/tb";

import { Box, Flex, Button, Menu, MenuButton, MenuList, MenuItem, MenuItemOption, useDisclosure, Heading } from '@chakra-ui/react'
import { Link as ChakraLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom'

const NavBar = () => {
    //console.log("003*Inicio: NavBar");
    return (
        <Box>
            <Flex h={'14hv'} w={'100%'} justify={'space-between'} align={'center'} backgroundColor={'#CAE5FF'} className='flexboxNavBar' id='flexboxNavBarD'>
                <Menu className='menuHeader'>
                    <MenuButton
                        as={Button}
                        aria-label='Options'
                        leftIcon={<TbCategory />}
                        variant='outline'
                        className='botonMenu'
                        minWidth='100px'
                        minHeight='14px'
                    >
                        <Flex align="center"> Categorias</Flex>
                    </MenuButton>
                    <MenuList minWidth='110px'>
                        <MenuItem command='' className='botonMenuItem'>
                            <Link to='/categoria/Leche'>
                                <Flex align="center"> <LuMilk />Leches</Flex>
                            </Link>
                        </MenuItem>
                        <MenuItem command='' className='botonMenuItem'>
                            <Link to='/categoria/Dulce'>
                                <Flex align="center"> <GiMasonJar /> Dulces</Flex>
                            </Link>
                        </MenuItem>
                        <MenuItem command='' className='botonMenuItem'>
                            <Link to='/categoria/Queso'>
                                <Flex align="center"> <PiCheese /> Quesos</Flex>
                            </Link>
                        </MenuItem>
                        <MenuItem command='' className='botonMenuItem'>
                            <Link to='/categoria/Crema'>
                                <Flex align="center"> <TbMilk /> Cremas</Flex>
                            </Link>
                        </MenuItem>
                        <MenuItem command='' className='botonMenuItem'>
                            <Link to='/categoria/Manteca'>
                                <Flex align="center"> <GiButter />Mantecas</Flex>
                            </Link>
                        </MenuItem>
                        <MenuItem command='' className='botonMenuItem'>
                            <Link to='/categoria/Yogurt'>
                                <Flex align="center"> <GiMilkCarton /> Yogurts</Flex>
                            </Link>
                        </MenuItem>
                        <MenuItem command='' className='botonMenuItem'>
                            <Link to='/categoria/Cafe'>
                                <Flex align="center"> <GiCoffeeBeans /> Cafe</Flex>
                            </Link>
                        </MenuItem>
                        <MenuItem command='' className='botonMenuItem'>
                            <Link to='/categoria/Azucar'>
                                <Flex align="center"> <GiSugarCane /> Azucar</Flex>
                            </Link>
                        </MenuItem>
                        <MenuItem command='' className='botonMenuItem'>
                            <Link to='/'>
                                <Flex align="center"> <TbCategory /> Todas</Flex>
                            </Link>
                        </MenuItem>
                    </MenuList>
                </Menu>
                <CartWidget />
            </Flex>
        </Box>
    )
}

export default NavBar
