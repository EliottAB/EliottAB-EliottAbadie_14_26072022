import _, { lastIndexOf } from "lodash"
import React, { useCallback, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import "../css/components/table.css"
import { TableRow } from "./TableRow"

export function Table(){

    const defaultSort = "firstName"
    const employees = useSelector(state => state.employees)

    const [maxEmployees, setMaxEmployees] = useState(10)
    const [page, setPage] = useState(0)
    const [sortedEmployees, setSortedEmployees] = useState(()=>{
        const baseValue = _.orderBy(employees, [defaultSort], ["asc"])
        return _.chunk(baseValue, maxEmployees)
    })
    const [lastSort, setLastSort] = useState(defaultSort)
    
    const sortEmployees = useCallback((sort = lastSort)=>{
        setSortedEmployees(()=>{
            const baseValue = _.orderBy(employees, [sort ? sort : lastSort], ["asc"])
            setLastSort(sort)
            return _.chunk(baseValue, maxEmployees)
        })
    }, [employees, maxEmployees, lastSort, setSortedEmployees])
    
    useEffect(()=>{
        sortEmployees()
    }, [maxEmployees, sortEmployees])

    return(
        <React.Fragment>
        {
            sortedEmployees[0] ?
            <React.Fragment>
                <select className="maxrows" onChange={(e)=>{setMaxEmployees(parseInt(e.target.value))}}>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
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
            </React.Fragment>
         : <p>Employees list is empty</p>
        }
        </React.Fragment>
    )

}