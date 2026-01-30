import { useEffect, useState } from "react"
import { ProductCard } from "../components/ProductCard"

export const Home = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        async function fetchProducts() {
            try{
                const res = await fetch(`https://dummyjson.com/products`)

                if(!res.ok){
                    throw new Error("Failed to fetch products")
                }

                const data = await res.json()
                setProducts(data.products)
            }
            catch(err){
                setError(err.message)
            }
            finally{
                setLoading(false)
            }
        }
        fetchProducts()
    },[])

    if(loading){
        return <p>Loading...</p>
    }

    if(error){
        return <p>{error}</p>
    }

  return (
    <div>
        <h1>Products</h1>
        <div className="grid grid-cols-3">
            {products.map(product => (
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>
    </div>
  )
}
