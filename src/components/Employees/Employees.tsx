import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../../API/Client/EmployeeService";
import { employeeInitialState, Employee } from "../Types/employee";
import { Button } from "../UI/button/Button";
import { EmployeeItem } from "./EmployeeItem";

const Employees: React.FC = () => {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const navigate = useNavigate();

    useEffect(()=>{
        EmployeeService.getAllEmployees().then(responce => {
            setEmployees([...employees, ...responce])
        })
    },[])

    const removeEmployee = (id:number):void => {
        setEmployees(employees.filter(worker => worker.id !==id));
        EmployeeService.deleteEmployee(id);
    }

    const addEmployee = (e: React.MouseEvent) => {
        e.preventDefault();
        navigate(`/employee/new`);
    }

    return(
        <div>
            <Button onClick={addEmployee}>Add Employee</Button>
            {employees.map((item) => {
              return  <EmployeeItem key={item.id} employee={item} removeEmployee={removeEmployee} />
            })}
        </div>
    )
}

export default Employees;