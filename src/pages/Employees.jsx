import _ from "lodash";
import { Fragment, useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BACKGROUND from "../assets/background.webp"
import { Header } from "../components/Header";
import { Table } from "../components/Table";
import "../css/pages/employees.css"

export function Employees(){

    const defaultSort = "firstName"
    const employees = useSelector(state => state.employees)

    const [maxEmployees, setMaxEmployees] = useState(10)
console.log(employees)
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
                        //this condition transform the date for be able to find it
                        if (new Date(element).getDate()) {
                            const date = new Date(element)
                            element = date.getDate().toString().padStart(2, 0) + "/" + (date.getMonth() + 1).toString().padStart(2, 0) + "/" + date.getFullYear()
                        }
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
        <Fragment>
            <img src={BACKGROUND} alt="" className="backgroundImage"/>
            <Header/>
            <main className="employeesmain">
                <div className="controlltable">
                    <select className="maxrows" onChange={sortedEmployees[0] ? (e)=>{setPage(0); setMaxEmployees(parseInt(e.target.value))} : null}>
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                    <input type="search" className="searchemployee" placeholder="search" onChange={(e)=>{setPage(0); sortEmployees()}}/>
                </div>
                <Table sortedEmployees={sortedEmployees} sortEmployees={sortEmployees} page={page} setPage={setPage}/>
            </main>
        </Fragment>
    )

}