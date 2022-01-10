import { useState, useEffect } from "react"
import NetFlixLogo from "../../images/NetFlixLogo.png";
import { Link } from "react-router-dom";
import "./Nav.css"

const Nav = () => {
    const [show, setShow] = useState(false);

    const NavBarVisibility = () =>
    {
        if (window.scrollY >100){
            setShow(true)
        }
        else{
            setShow(false)
        }

    } 
    useEffect(() => {
        window.addEventListener("scroll", NavBarVisibility);

        return () => {
            window.removeEventListener("scroll", NavBarVisibility)
        }
    }, [])
    return (
        <div className={`nav ${show && "nav-black"}`}>

            <Link to="/">
                <img src={NetFlixLogo} alt="not found"  className="nav-logo" />
            </Link>
        
            
        </div>
    )
}

export default Nav
 