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
    <div className="bg-gray-100">
        <h1 className="px-8 pt-16 text-2xl">Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 py-10">
            {products.map(product => (
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>
    </div>
  )
}
