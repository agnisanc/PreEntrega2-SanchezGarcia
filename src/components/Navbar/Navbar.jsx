import CartWidget from "../CartWidget/Cart.jsx"
import ItemList from "../ItemListContainer/ItemListContainer.jsx"
import classes from "./Navbar.module.css"

const Navbar = () => {
    return (
        <>
        <header className={classes.header}>
        <div className={classes.title}>
        <h2>JOYAS AUREOM</h2>
        <CartWidget />
        </div>
        <nav className = {classes.navbar}>
            <a>Oro</a>
            <a>Plata</a>
            <a>Outlet</a>
        </nav>
        </header>
        </>
    )
}

export default Navbar