import { useCart } from "../contexts/CartContext"

export const ProductCard = ({ product }) => {
    const {addToCart} = useCart()

    const { title, price, thumbnail } = product
    return (
        <div className="flex justify-evenly ">
            <div className="w-xs border border-pink-300 rounded-xl p-4 space-y-1 hover:shadow-2xl shadow-purple -300 transition-all bg-gray-200">
                <div className="flex items-center justify-center">
                    <img src={thumbnail} alt={title} className="w-48 "/>
                </div>
                <hr className="text-purple-500"/>
                <div className="pl-2">
                    <h2 className="text-lg font-semibold"><span className="hover:text-pink-600 cursor-pointer">{title}</span></h2>
                    <p className="font-bold text-lg">$ {price}</p>
                </div>
                <div className="flex justify-between items-center px-2 py-2">
                    <button className="bg-pink-600  px-6 py-2 rounded-full text-white hover:bg-pink-500 cursor-pointer active:scale-97 transition-all">Buy now</button>
                    <button className="bg-purple-600  px-6 py-2 rounded-full text-white hover:bg-purple-500 cursor-pointer active:scale-97 transition-all" onClick={() => addToCart(product)}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}
