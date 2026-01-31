import { useState } from "react"
import './App.css'
import { Cart } from "./pages/Cart"
import { Home } from "./pages/Home"
import { Navbar } from "./components/Navbar"

function App() {
  const [showCart, setShowCart] = useState(false)

  const togglePage = () => {
    setShowCart(!showCart)
  }

  return (
    <>
      <Navbar onToggle={togglePage} showCart={showCart}/>
      {showCart ? <Cart /> : <Home />}
    </>
  )
}

export default App
