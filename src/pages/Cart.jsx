import { useCart } from "../contexts/CartContext"

export const Cart = () => {
    const { cart } = useCart()

    const total = cart.reduce((sum, item) => {
        return sum + item.price
    }, 0)

    if (cart.length === 0) {
        return <h1>Cart is empty</h1>
    }

    return (
        <div>
            <h1>My Cart</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 py-10">
                {cart.map((item, index) => (
                    <div className="flex justify-center">
                        <div key={index} className="w-xs border border-pink-300 rounded-xl p-4 space-y-1 hover:shadow-2xl shadow-purple -300 transition-all">
                        <div className="flex items-center justify-center">
                            <img src={item.thumbnail} alt={item.title} className="w-48 " />
                        </div>
                        <hr className="text-purple-500" />
                        <div className="pl-2">
                            <h2 className="text-lg font-semibold"><span className="hover:text-pink-600 cursor-pointer">{item.title}</span></h2>
                            <p className="font-bold text-lg">$ {item.price}</p>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
            <h2>Total: ${total.toFixed(2)}</h2>
        </div>
    )
}