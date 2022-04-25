import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import EmployeeService from "../../API/Client/EmployeeService"
import { Employee, employeeInitialState } from "../../Types/employee"
import { Button } from "../UI/button/Button"
import { Input } from "../UI/input/Input"



export const EmployeeIdPage: React.FC = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [employee, setEmployee] = useState<Employee>(employeeInitialState)


    useEffect(() => {
        if (params.id) {
            EmployeeService.getEmployeeById(Number(params.id)).then((response) => {
                setEmployee(response);
            });
        }
    }, [])

    const navigateToEmployeesPage = () => navigate("/employees");

    const updateEmployee = () => {
        const updateEmployee= {
            ...employee
        }
        EmployeeService.updateEmployee(updateEmployee)
        navigateToEmployeesPage()
    }

    const addNewEmployee = () => {
        const newEmployee = {
            ...employee, id: Date.now()
        }
        EmployeeService.postEmployee(newEmployee)
        navigateToEmployeesPage()
    };


    return (<form>
        <Input
            value={employee.surname}
            type='text'
            placeholder='Employee Surname'
            onChange={(value) => setEmployee({ ...employee, surname: value })}
        />
        <Input
            value={employee.name}
            type='text'
            placeholder='Employee Name'
            onChange={(value) => setEmployee({ ...employee, name: value })}
        />
        <Input
            value={employee.patronymic}
            type='text'
            placeholder='Employee Patronumic'
            onChange={(value) => setEmployee({ ...employee, patronymic: value })}
        />
        <Input
            value={employee.position}
            type='text'
            placeholder='Employee Position'
            onChange={(value) => setEmployee({ ...employee, position: value })}
        />

        {params.id ? <Button onClick={updateEmployee}>Update employee</Button> :
            <Button onClick={addNewEmployee}>Add employee</Button>}
            <Button onClick={navigateToEmployeesPage}>Сancel</Button>

    </form>
    )
}