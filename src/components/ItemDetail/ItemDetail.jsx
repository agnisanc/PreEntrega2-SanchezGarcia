import ItemCount from "../ItemCount/ItemCount"
import classes from "./ItemDetail.module.css"


const ItemDetail = ({ name, category, stock, price, image, type}) => {
    return (
        <article className={classes.itemDetail}>
            <div className={classes.image}>
            <img src={image} style={{width: 400}}/>
            </div>
            <div className={classes.details}>
            <h3>{name}</h3>
            <h3>Material: {category}</h3>
            <h3>Tipo: {type}</h3>
            <h3>${price}</h3>
            <ItemCount stock={stock}/>
            </div>
        </article>
    )
}

export default ItemDetail