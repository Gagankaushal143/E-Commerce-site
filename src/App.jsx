import { useState } from "react"
import './App.css'
import { Cart } from "./pages/Cart"
import { Home } from "./pages/Home"

function App() {
  const [showCart, setShowCart] = useState(false)

  return (
    <>
      <button onClick={() => setShowCart(!showCart)}>
        {showCart ? "Go to Home" : "Go to Cart"}
      </button>
      {showCart ? <Cart /> : <Home />}
    </>
  )
}

export default App
