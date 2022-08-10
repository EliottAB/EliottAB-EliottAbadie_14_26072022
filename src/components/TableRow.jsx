export function TableRow({employee}){

    const startDate = new Date(employee.startDate)
    const birthDate = new Date(employee.birthDate)

    return(
        <tr>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{startDate.getDate() + "/ " + startDate.getMonth() + "/ " + startDate.getFullYear()}</td>
            <td>{employee.department}</td>
            <td>{birthDate.getDate() + "/ " + birthDate.getMonth() + "/ " + birthDate.getFullYear()}</td>
            <td>{employee.street}</td>
            <td>{employee.city}</td>
            <td>{employee.state}</td>
            <td>{employee.zip}</td>
        </tr>
    )

}