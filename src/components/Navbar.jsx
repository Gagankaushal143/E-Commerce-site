import { useCart } from "../contexts/CartContext";
import { CiShoppingCart } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";

export const Navbar = ({ onToggle, showCart }) => {
    const { cart } = useCart()

    const totalItems = cart.reduce((sum, item) => {
        return sum + item.quantity
    }, 0);

    return (
        <div className="flex flex-col">
            <div className="flex justify-between px-4 bg-gray-200 fixed w-full shadow-2xl border-b border-pink-300">
                <h1 className="text-2xl py-2 text-pink-400 italic font-bold">Swift<span className="text-purple-600">Cart</span> </h1>

                <button onClick={onToggle} className="text-xl hover:text-pink-400 mr-10 cursor-pointer transition-colors duration-200">{showCart ? "Home" : "Cart"}</button>

                <span className="flex items-center justify-center text-lg hover:text-pink-400 cursor-pointer transition-colors duration-200" onClick={onToggle}>
                    <CiShoppingCart className="text-2xl" /> <sup>{totalItems}</sup>
                </span>
            </div>
        </div>
    )
}
