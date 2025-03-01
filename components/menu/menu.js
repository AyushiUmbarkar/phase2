import React  from "react";
import { Link , Route} from "react-router-dom";

const Menu = () => {
    return(
        <div>
            <Route>
            Welcome to Menu Page <br/>
            <Link to="/first">First</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/second">Second</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/third">Third</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/login">Login</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/calc">Calc</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/menu">Menu</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           </Route>
            </div>
            );
        };
        export default Menu;