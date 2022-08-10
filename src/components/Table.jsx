import _ from "lodash"
import React, { useState } from "react"
import { useSelector } from "react-redux"
import "../css/components/table.css"
import { TableRow } from "./TableRow"

export function Table(){

    const defaultSort = "firstName"
    const employees = useSelector(state => state.employees)

    const [maxEmployees, setMaxEmployees] = useState(5)
    const [page, setPage] = useState(0)
    const [sortedEmployees, setSortedEmployees] = useState(()=>{
        const baseValue = _.orderBy(employees, [defaultSort], ["asc"])
        return _.chunk(baseValue, maxEmployees)
    })

    function sortEmployees(sort){
        setSortedEmployees(()=>{
            const baseValue = _.orderBy(employees, [sort], ["asc"])
            return _.chunk(baseValue, maxEmployees)
        })
    }
    

    return(
        <React.Fragment>
        {
            sortedEmployees[0] ?
            <div className="tableContainer">
                <table className="employeelist">
                    <thead>
                        <tr>
                            <th><button onClick={()=>{sortEmployees("firstName")}}>First Name</button></th>
                            <th><button onClick={()=>{sortEmployees("lastName")}}>Last Name</button></th>
                            <th><button onClick={()=>{sortEmployees("startDate")}}>Start Date</button></th>
                            <th><button onClick={()=>{sortEmployees("department")}}>Department</button></th>
                            <th><button onClick={()=>{sortEmployees("birthDate")}}>Date of Birth</button></th>
                            <th><button onClick={()=>{sortEmployees("street")}}>Street</button></th>
                            <th><button onClick={()=>{sortEmployees("city")}}>City</button></th>
                            <th><button onClick={()=>{sortEmployees("state")}}>State</button></th>
                            <th><button onClick={()=>{sortEmployees("zip")}}>Zip Code</button></th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedEmployees[page].map((employee) => <TableRow employee={employee} key={sortedEmployees[page].indexOf(employee)}/>)}
                    </tbody>
                </table>
            </div>
         : null
        }
        </React.Fragment>
    )

}