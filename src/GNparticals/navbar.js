import react from "react";
import Home from "./NavItems/home";
import Contact from "./NavItems/contact";
import About from "./NavItems/about";

const NavBar = ()=>{
    return ( 
        <nav className="ui raised very padded segment">
            <a className="ui teal inverted segment">NavBar</a>
            <div className="ui right floated header">
                <button className="ui button"><a href="/">Home</a></button>
                <button className="ui button"><a href="/about"></a>About</button>
                <button className="ui button"><a href="/contact"></a>Contact</button>
            </div>
        </nav>
     );
}

export default NavBar;