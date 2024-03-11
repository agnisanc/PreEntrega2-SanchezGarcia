import { Link } from "react-router-dom"

const Item =({name, category, price, image, id}) => {
    return (
        <article>
            <img src={image} style={{width: 200}} />
            <h3>{name}</h3>
            <h3>{category}</h3>
            <h3>${price}</h3>
            <Link to={`/item/${id}`}>Ver detalles</Link>
        </article>
    )
}

export default Item