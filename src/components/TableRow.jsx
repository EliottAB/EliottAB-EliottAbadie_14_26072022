export function TableRow({employee}){

    return(
        <tr>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{new Date(employee.startDate).toISOString().split("T")[0]}</td>
            <td>{employee.department}</td>
            <td>{new Date(employee.birthDate).toISOString().split("T")[0]}</td>
            <td>{employee.street}</td>
            <td>{employee.city}</td>
            <td>{employee.state}</td>
            <td>{employee.zip}</td>
        </tr>
    )

}