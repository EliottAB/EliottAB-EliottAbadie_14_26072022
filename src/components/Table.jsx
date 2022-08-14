import React from "react"
import "../css/components/table.css"
import { TableRow } from "./TableRow"

export function Table({sortedEmployees, sortEmployees, page}){

    return(
            <React.Fragment>
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
                        {
                        sortedEmployees[0] ?
                            sortedEmployees[page].map((employee) => <TableRow employee={employee} key={sortedEmployees[page].indexOf(employee)}/>)
                        :
                            <tr className="emptylist">
                                <td>Employees list is empty</td>
                                <td></td>
                            </tr>
                        }
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
    )

}