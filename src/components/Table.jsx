import React from "react"
import "../css/components/table.css"
import { TableRow } from "./TableRow"
import { TableHeadCase } from "./TableHeadCase"

export function Table({sortedEmployees, sortEmployees, page, lastSort}){
    
    return(
            <React.Fragment>
                <div className="tableContainer">
                    <table className="employeelist">
                        <thead>
                            <tr>
                                <TableHeadCase name="First Name" value="firstName" lastSort={lastSort} sortEmployees={sortEmployees}/>
                                <TableHeadCase name="Last Name" value="lastName" lastSort={lastSort} sortEmployees={sortEmployees}/>
                                <TableHeadCase name="Start Date" value="startDate" lastSort={lastSort} sortEmployees={sortEmployees}/>
                                <TableHeadCase name="Department" value="department" lastSort={lastSort} sortEmployees={sortEmployees}/>
                                <TableHeadCase name="Date of Birth" value="birthDate" lastSort={lastSort} sortEmployees={sortEmployees}/>
                                <TableHeadCase name="Street" value="street" lastSort={lastSort} sortEmployees={sortEmployees}/>
                                <TableHeadCase name="City" value="city" lastSort={lastSort} sortEmployees={sortEmployees}/>
                                <TableHeadCase name="State" value="state" lastSort={lastSort} sortEmployees={sortEmployees}/>
                                <TableHeadCase name="Zip code" value="zip" lastSort={lastSort} sortEmployees={sortEmployees}/>
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