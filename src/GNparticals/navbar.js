import { NavLink,withRouter } from "react-router-dom";



const NavBar = ()=>{
    return ( 
        <div className="ui inverted vertical masthead center aligned segment">
            <nav className="ui large secondary inverted pointing menu">
                <div className="ui container">
                    <div className="ui large secondary inverted pointing menu">
                        <button className="item"><NavLink to="/">Home</NavLink></button>
                        <button className="item"><NavLink to="/about">About</NavLink></button>
                        <button className="item"><NavLink to="/contact">Contact</NavLink></button>
                    </div>                   
                </div>
        </nav>
        </div>
        
     );
}

export default withRouter(NavBar);