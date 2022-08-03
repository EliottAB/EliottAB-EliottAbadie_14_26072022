import { Link } from "react-router-dom";
import "../css/components/header.css"

export function Header(props){

    return(
        <header>
            <h2>{props.page === "home" ? "Create Employee" : "Employees"}</h2>
            <Link to="/employees" className="employeeLink" >{props.page === "home" ? "Employees" : "Create Employee"}</Link>
        </header>
    )

}