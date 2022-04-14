import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import EmployeeService from "../../API/Client/EmployeeService"
import { Employee, employeeInitialState } from "../Types/employee"
import { Button } from "../UI/button/Button"
import { Input } from "../UI/input/Input"



export const EmployeeIdPage: React.FC = () => {
    const params = useParams();
    const [employee, setEmployee] = useState<Employee>(employeeInitialState)


    useEffect(() => {
        if (params.id) {
            EmployeeService.getEmployeeById(Number(params.id)).then((response) => {
                setEmployee(response);
            });
        }
    }, [])

    const updateEmployee = (e: React.MouseEvent) => {
        e.preventDefault()
        const updateEmployee= {
            ...employee
        }
        EmployeeService.updateEmployee(updateEmployee)
    }

    const addNewEmployee = (e: React.MouseEvent) => {
        e.preventDefault()
        const newEmployee = {
            ...employee, id: Date.now()
        }
        EmployeeService.postEmployee(newEmployee)
        setEmployee(employeeInitialState)
    };


    return (<form>
        <Input
            value={employee.surname}
            type='text'
            placeholder='Employee Surname'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmployee({ ...employee, surname: e.target.value })}
        />
        <Input
            value={employee.name}
            type='text'
            placeholder='Employee Name'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmployee({ ...employee, name: e.target.value })}
        />
        <Input
            value={employee.patronymic}
            type='text'
            placeholder='Employee Patronumic'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmployee({ ...employee, patronymic: e.target.value })}
        />
        <Input
            value={employee.position}
            type='text'
            placeholder='Employee Position'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmployee({ ...employee, position: e.target.value })}
        />

        {params.id ? <Button onClick={updateEmployee}>Update employee</Button> :
            <Button onClick={addNewEmployee}>Add employee</Button>}

    </form>
    )
}