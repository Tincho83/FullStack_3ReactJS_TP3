import React, { createContext, useState } from 'react'

const Contexto = createContext()

export const CartContextProvider = ({ children }) => {

    const [carrito, establecerCarrito] = useState([])

    const agregarItem = (productoParaAgregar, cantidad) => {
        const nuevoItem = { ...productoParaAgregar, cantidad }

        if (productoEnCarrito(nuevoItem.id)) {
            const carritoActualizado = carrito.map((prod) => {
                if (prod.id === nuevoItem.id) {
                    return { ...prod, cantidad: prod.cantidad + nuevoItem.cantidad }
                }
                return prod
            })
            establecerCarrito(carritoActualizado)
        }
        else {
            establecerCarrito([...carrito, nuevoItem])
        }
    }

    const productoEnCarrito = (id) => {
        return carrito.some((prod) => prod.id === id)
    }

    const obtenerTotal = () => {
        return carrito.reduce((valorActual, item) => valorActual + item.precio * item.cantidad, 0)
    }

    const obtenerCantidad = () => {
        return carrito.reduce((cantActual, item) => cantActual + item.cantidad, 0)
    }

    const borrarItem = (id) => {
        const carritoActualizado = carrito.filter((prod) => prod.id !== id)
        establecerCarrito([...carritoActualizado])
    }

    const vaciarCarrito = () => {
        establecerCarrito([])
    }

    console.log(carrito)

    return (
        <Contexto.Provider value={{ carrito, establecerCarrito, agregarItem, borrarItem, vaciarCarrito, obtenerCantidad, obtenerTotal }}>
            {children}
        </Contexto.Provider>
    )
}

export default Contexto
