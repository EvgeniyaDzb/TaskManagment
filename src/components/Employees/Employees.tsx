import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeEntity from "../../API/Client/EmployeeEntity";
import { employeeInitialState, IEmployee } from "../Types/employee";
import { Button } from "../UI/button/Button";
import { EmployeeItem } from "./EmployeeItem";

const Employees: React.FC = () => {
    const [employees, setEmployees] = useState<IEmployee[]>([]);
    const navigate = useNavigate();

    useEffect(()=>{
        EmployeeEntity.getAllEmployees().then(responce => {
            setEmployees([...employees, ...responce])
        })
    },[])

    const removeEmployee = (id:number):void => {
        setEmployees(employees.filter(worker => worker.id !==id));
        EmployeeEntity.deleteEmployee(id);
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