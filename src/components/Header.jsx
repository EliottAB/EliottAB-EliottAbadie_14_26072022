import { Link } from "react-router-dom";
import "../css/components/header.css"

export function Header({page}){

    return(
        <header>
            <h2>{page === "home" ? "Create Employee" : "Employees"}</h2>
            <Link to={page === "home" ? "/employees" : "/"} className="employeeLink" >{page === "home" ? "Employees" : "Create Employee"}</Link>
        </header>
    )

}