import { useEffect, useState } from "react"
import { ProductCard } from "../components/ProductCard"
import { AiFillProduct } from "react-icons/ai";

export const Home = ({setIsLoading}) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        async function fetchProducts() {
            try{
                setIsLoading(true)
                
                const res = await fetch(`https://dummyjson.com/products`)

                if(!res.ok){
                    throw new Error("Failed to fetch products")
                }

                const data = await res.json()
                setTimeout(() => {
                    setProducts(data.products)
                    setLoading(false)
                    setIsLoading(false)

                }, 2000);
            }
            catch(err){
                setError(err.message)
                setLoading(false)
                setIsLoading(false)
            }
            
        }
        fetchProducts()
    },[setIsLoading])

    if(loading){
        return <div className="flex items-center justify-center h-screen">
            <p className="flex justify-center items-center text-xl">Loading products <div className="flex items-center justify-center"> <div className="h-6 w-6 ml-2 rounded-full border-4 border-indigo-600 border-t-transparent animate-spin"></div> </div></p>
        </div>
    }

    if(error){
        return <p>{error}</p>
    }

  return (
    <div className="bg-gray-100">
        <h1 className="px-8 pt-16 text-2xl flex items-center justify-start">Products <AiFillProduct className="ml-2 text-pink-300"/></h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 py-10">
            {products.map(product => (
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>
    </div>
  )
}
