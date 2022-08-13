import React from "react"
import "../css/components/table.css"
import { TableRow } from "./TableRow"

export function Table({sortedEmployees, sortEmployees, page, setPage}){

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
                <div className="pagination">
                    <button className="prevpage" onClick={()=>{setPage((page)=> page > 0 ? page - 1 : 0)}}/>
                    <p>{sortedEmployees[0] ? page+1 : 0}/{sortedEmployees.length}</p>
                    <button className="nextpage" onClick={()=>{setPage((page)=> page+1 < sortedEmployees.length ? page + 1 : sortedEmployees.length - 1)}}/>
                </div>
            </React.Fragment>
    )

}