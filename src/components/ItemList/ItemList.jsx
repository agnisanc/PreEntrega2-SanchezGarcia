import Item from "../Item/Item.jsx"

const ItemList = ({ products }) => {
    return (
        <section>
            {
                products.map(product => {
                    return <Item key={product.id} {...product} />
                })
            }
        </section>
    )
}

export default ItemList