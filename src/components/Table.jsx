import _ from "lodash"
import React, { useCallback, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import "../css/components/table.css"
import { TableRow } from "./TableRow"

export function Table(){

    const defaultSort = "firstName"
    const employees = useSelector(state => state.employees)

    const [maxEmployees, setMaxEmployees] = useState(2)
    const [page, setPage] = useState(0)
    const [sortedEmployees, setSortedEmployees] = useState(()=>{
        const baseValue = _.orderBy(employees, [defaultSort], ["asc"])
        return _.chunk(baseValue, maxEmployees)
    })
    const [lastSort, setLastSort] = useState(defaultSort)
    
    const searchEmployees = useCallback(()=>{
        let searchedEmployees = []
        let search = document.querySelector(".searchemployee").value.toLowerCase().split(" ")
        employees.forEach(employee => {
            //count to check if all words in searchbar are presents.
                let countword = 0
                search.forEach(word => {
                    //"stop" stop the algorythm to search 2 valids values. 1 is enough.
                    let stop = false
                    Object.values(employee).forEach(element => {
                        if (element.toLowerCase().includes(word) && stop === false) {
                            countword ++
                            stop = true
                        }
                    });
                });
                if (countword >= search.length) {
                    searchedEmployees.push(employee)
                }
            });
        return searchedEmployees
    }, [employees])
    
    const sortEmployees = useCallback((sort = lastSort)=>{

        setSortedEmployees(()=>{
            let searchedEmployees = employees
            if (document.querySelector(".searchemployee").value.length>0) {
                searchedEmployees = searchEmployees()
            }
            const baseValue = _.orderBy(searchedEmployees, [sort ? sort : lastSort], ["asc"])
            setLastSort(sort)
            return _.chunk(baseValue, maxEmployees)
        })
        
    }, [employees, maxEmployees, lastSort, setSortedEmployees, searchEmployees])
    
    useEffect(()=>{
        sortEmployees()
    }, [maxEmployees, sortEmployees])


    return(
            <React.Fragment>
                <select className="maxrows" onChange={sortedEmployees[0] ? (e)=>{setPage(0); setMaxEmployees(parseInt(e.target.value))} : null}>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>
                <input type="search" className="searchemployee" onChange={(e)=>{setPage(0); sortEmployees()}}/>
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