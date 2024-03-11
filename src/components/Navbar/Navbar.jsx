import CartWidget from "../CartWidget/Cart.jsx"
import { Link } from "react-router-dom"
import classes from "./Navbar.module.css"



const Navbar = () => {
    return (
        <>
        <header className={classes.header}>
        <div className={classes.title}>
        <Link to='/'>JOYAS AUREOM</Link>
        <CartWidget />
        </div>
        <nav className = {classes.navbar}>
            <Link to='/category/Oro'>Oro</Link>
            <Link to='/category/Plata'>Plata</Link>
        </nav>
        </header>
        </>
    )
}

export default Navbar