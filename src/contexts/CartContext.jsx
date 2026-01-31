import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart , setCart] = useState(() =>{
        const savedCart = localStorage.getItem("cart")
        return savedCart ? JSON.parse(savedCart): []
    })
    
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    })

    const addToCart = (product) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(
                (item) => item.id === product.id
            )
            if(existingItem){
                return prevCart.map((item) => 
                    item.id === product.id ? {...item, quantity: item.quantity + 1} : item
                )
            }
            return [...prevCart, {...product, quantity: 1}]
        })
    }

    const removeFromCart = (id) =>{
        setCart(prevCart => {
            return prevCart.filter((item)=> item.id !== id)
        })
    }

    const increaseQuantity = (id) => {
        setCart(prevCart =>
            prevCart.map((item) => item.id === id ? {...item, quantity: item.quantity + 1} : item 
            )
        )
    }

    const decreaseQuantity = (id) => {
        setCart(prevCart =>{
            const item = prevCart.find((item) => item.id === id)

            if(!item) return prevCart

            if(item.quantity === 1){
                return prevCart.filter((item => item.id !== id))
            }
            
            return prevCart.map((item) => item.id === id ? {...item, quantity: item.quantity -1} : item)
        })
        
    }
    
    
    return(
        <CartContext.Provider value={{cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity}} >
            {children}
        </CartContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext)