export const Footer = () => {
  return (
    <footer>
        <div className="py-6">
            <p className="text-center text-gray-500">
                © {new Date().getFullYear()} 
                <p className="text-lg py-2 text-pink-400 italic font-bold">Swift<span className="text-purple-600">Cart</span> </p>
                All rights reserved.
                <p> Built by <span className="font-bold">Gagan Kaushal</span> </p>
            </p>
        </div>
    </footer>
  )
}
