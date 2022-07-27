import { Fragment } from "react";
import { Link } from "react-router-dom";

export function Header(){

    return(
        <Fragment>
            <h1>HRnet</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/employees">Employees</Link>
            </nav>
        </Fragment>
    )

}