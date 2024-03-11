import Item from "../Item/Item.jsx"
import classes from "./ItemList.module.css"

const ItemList = ({ products }) => {
    return (
        <section>
            {
                products.map(product => {
                    return <div className={classes.productSection}><Item key={product.id} {...product} /></div>
                })
            }
        </section>
    )
}

export default ItemList