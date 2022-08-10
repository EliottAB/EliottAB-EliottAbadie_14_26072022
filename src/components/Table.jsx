import _ from "lodash"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import "../css/components/table.css"
import { TableRow } from "./TableRow"

export function Table(){

    const [employees, setEmployees] = useState(useSelector(state => state.employees))
    const [pagination, setPagination] = useState(5)
    const [page, setPage] = useState(0)

    const employeesmax = _.chunk(employees, pagination)

    function sortEmployees(sort){
        setEmployees(_.orderBy(employeesmax[page], [sort], ["asc"]))
    }
    

    return(
        <table className="employeelist">
            <thead>
                <tr>
                    <th onClick={()=>{sortEmployees("firstName")}}>First Name</th>
                    <th onClick={()=>{sortEmployees("lastName")}}>Last Name</th>
                    <th onClick={()=>{sortEmployees("startDate")}}>Start Date</th>
                    <th onClick={()=>{sortEmployees("department")}}>Department</th>
                    <th onClick={()=>{sortEmployees("birthDate")}}>Date of Birth</th>
                    <th onClick={()=>{sortEmployees("street")}}>Street</th>
                    <th onClick={()=>{sortEmployees("city")}}>City</th>
                    <th onClick={()=>{sortEmployees("state")}}>State</th>
                    <th onClick={()=>{sortEmployees("zip")}}>Zip Code</th>
                </tr>
            </thead>
            <tbody>
                {employeesmax[page].map((employee) => <TableRow employee={employee} key={employeesmax[page].indexOf(employee)}/>)}
            </tbody>
        </table>
    )

}