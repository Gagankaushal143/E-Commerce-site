import { createContext, useContext, useState } from "react";

const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart , setCart] = useState([])
    
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
    
    
    return(
        <CartContext.Provider value={{cart, addToCart, removeFromCart}} >
            {children}
        </CartContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext)