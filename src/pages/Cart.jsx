import { useCart } from "../contexts/CartContext"

export const Cart = () => {
    const { cart, removeFromCart } = useCart()

    const total = cart.reduce((sum, item) => {
        return sum + item.price * item.quantity
    }, 0)

    if (cart.length === 0) {
        return <h1 className="text-center mt-36 text-2xl text-gray-400">Cart is empty</h1>
    }

    return (
        <div>
            <h1>My Cart</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 py-10">
                {cart.map((item, index) => (
                    <div className="flex justify-center">
                        <div key={index} className="w-xs border border-pink-300 rounded-xl p-4 space-y-1 transition-all">
                            <div className="text-right">
                                <button onClick={() => removeFromCart(item.id)} className="px-3 py-1 rounded-full bg-gray-200 text-lg hover:bg-gray-300 cursor-pointer">x</button>
                            </div>
                            <div className="flex items-center justify-center">
                                <img src={item.thumbnail} alt={item.title} className="w-48 " />
                            </div>
                            <hr className="text-purple-500" />
                            <div className="pl-2">
                                <h2 className="text-lg font-semibold"><span className="hover:text-pink-600 cursor-pointer">{item.title}</span></h2>
                                <p className="font-bold text-lg">$ {item.price}</p>
                                <p className="font-bold text-gray-400">Quantity: {item.quantity}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <h2>Total: ${total.toFixed(2)}</h2>
        </div>
    )
}