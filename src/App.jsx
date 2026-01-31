import { useState } from "react"
import './App.css'
import { Cart } from "./pages/Cart"
import { Home } from "./pages/Home"
import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"

function App() {
  const [showCart, setShowCart] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const togglePage = () => {
    setShowCart(!showCart)
  }

  return (
    <>
      <Navbar onToggle={togglePage} showCart={showCart}/>
      {showCart ? <Cart /> : <Home setIsLoading={setIsLoading}/>}
      
      {!isLoading &&  <Footer />}
    </>
  )
}

export default App
