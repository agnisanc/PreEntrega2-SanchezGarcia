import ItemCount from "../ItemCount/ItemCount"


const ItemDetail = ({ name, category, stock, price, image, type}) => {
    return (
        <article>
            <div>
            <img src={image} style={{width: 400}}/>
            </div>
            <div>
            <div>
            <h3>{name}</h3>
            <h3>Material: {category}</h3>
            <h3>Tipo: {type}</h3>
            <h3>${price}</h3>
            </div>
            <div>
            <ItemCount stock={stock}/>
            </div>
            </div>
        </article>
    )
}

export default ItemDetail