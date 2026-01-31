import { useCart } from "../contexts/CartContext"
import { BsCartXFill } from "react-icons/bs";

export const Cart = () => {
    const { cart, removeFromCart , increaseQuantity, decreaseQuantity} = useCart()

    const total = cart.reduce((sum, item) => {
        return sum + item.price * item.quantity
    }, 0)

    if (cart.length === 0) {
        return <div className="h-screen w-full flex items-center justify-center"><h1 className="text-2xl text-gray-400 flex justify-center">No items in cart <BsCartXFill className="ml-2"/></h1></div>
    }

    return (
        <div>
            <h1 className="pt-16 text-2xl px-8">My Cart</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 py-10">
                {cart.map((item, index) => (
                    <div className="flex justify-center">
                        <div key={index} className="w-76 border border-pink-300 rounded-xl p-4 space-y-1 transition-all">
                            <div className="text-right">
                                <button onClick={() => removeFromCart(item.id)} className="text-xl hover:text-red-400 cursor-pointer"><BsCartXFill /></button>
                            </div>
                            <div className="flex items-center justify-center">
                                <img src={item.thumbnail} alt={item.title} className="w-40 " />
                            </div>
                            <hr className="text-purple-500" />
                            <div className="pl-2">
                                <h2 className="text-lg"><span className="hover:text-pink-600 cursor-pointer truncate">{item.title}</span></h2>
                                <p className="font-bold text-base">$ {item.price}</p>
                                <div className="flex justify-between items-center">
                                    <p className="font-bold text-gray-500">Quantity: <button onClick={() => decreaseQuantity(item.id)} className="bg-gray-500 px-2 rounded-md text-white">-</button> {item.quantity} <button onClick={() => increaseQuantity(item.id)} className="bg-gray-500 px-2 rounded-md text-white">+</button></p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <h2 className="text-2xl px-8">Total: ${total.toFixed(2)}</h2>
        </div>
    )
}