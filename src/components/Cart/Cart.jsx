import { Button, Heading } from '@chakra-ui/react'
import React, { useContext } from 'react'
import Contexto from '../../context/CartContext'
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer } from '@chakra-ui/react'
import { MdDeleteForever } from "react-icons/md";
import { Link } from 'react-router-dom'

const Cart = () => {
    const { carrito, borrarItem, vaciarCarrito, obtenerTotal } = useContext(Contexto)
    const cantProdCarrito = carrito.length;

    return (
        <div>
            <Heading>Carrito de compras</Heading>

            <TableContainer>
                <Table variant='striped' colorScheme='teal'>
                    <TableCaption>Contenido del carrito de usuario</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Producto</Th>
                            <Th isNumeric>Precio</Th>
                            <Th isNumeric>Cantidad</Th>
                            <Th isNumeric>SubTotal</Th>
                            <Th>Acciones</Th>
                        </Tr>
                    </Thead>
                    {
                        cantProdCarrito > 0 ?
                            <Tbody>
                                {
                                    carrito.map((prod) => (
                                        <CartItem key={prod.id} producto={prod} borrarItem={borrarItem} />
                                            /*
                                            <Tr key={prod.id}>
                                                <Td>{prod.nombre}</Td>
                                                <Td>{prod.precio}</Td>
                                                <Td>{prod.cantidad}</Td>
                                                <Td isNumeric>{prod.precio * prod.cantidad}</Td>
                                                <Td> <Button onClick={() => borrarItem(prod.id)}> <MdDeleteForever /> </Button> </Td>
                                            </Tr>
                                            */
                                    ))
                                }
                            </Tbody>
                            :
                            <Tbody>
                                <Tr>
                                    <Td>Sin Productos Agregados</Td>
                                    <Td></Td>
                                    <Td isNumeric></Td>
                                    <Td isNumeric></Td>
                                    <Td> </Td>
                                </Tr>
                            </Tbody>
                    }

                    <Tfoot>
                        {
                            cantProdCarrito > 0 ?
                                <Tr>
                                    <Th> <Button onClick={() => vaciarCarrito()}> Vaciar Carrito </Button> </Th>
                                    <Th> <Heading>Total: $ {obtenerTotal()} </Heading> </Th>
                                    <Th> <Button > <Link to='/finalizarcompra'> Finalizar Compra </Link> </Button> </Th>
                                </Tr>
                                :
                                <Tr>
                                    <Th> <Button > <Link to='/'> Ir a Todos los Productos </Link> </Button> </Th>
                                </Tr>
                        }
                    </Tfoot>
                </Table>
            </TableContainer>
        </div>
    )
}

// Componente de elemento de producto del carrito
const CartItem = React.memo(({ producto, borrarItem }) => {
    return (
        <Tr>
            <Td>{producto.nombre}</Td>
            <Td>{producto.precio}</Td>
            <Td>{producto.cantidad}</Td>
            <Td isNumeric>{producto.precio * producto.cantidad}</Td>
            <Td> <Button onClick={() => borrarItem(producto.id)}> <MdDeleteForever /> </Button> </Td>
        </Tr>
    );
});

export default Cart
