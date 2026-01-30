export const ProductCard = ({ product }) => {
    const { title, price, thumbnail } = product
    return (
        <div className="flex items-center justify-around">
            <div className="w-xs border rounded-xl">
                <img src={thumbnail} alt={title} />
                <h2>{title}</h2>
                <p>${price}</p>
                <button>Add to cart</button>
            </div>
        </div>
    )
}
