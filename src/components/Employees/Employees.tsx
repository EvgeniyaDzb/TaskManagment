import React, { useEffect, useState } from "react";
import EmployeeClient from "../../API/Client/EmployeeClient";
import { IEmployee } from "../Types/employee";
import { EmployeeItem } from "./EmployeeItem";

const Employees: React.FC = () => {
    const [employees, setEmployees] = useState<IEmployee[]>([])

    useEffect(()=>{
        EmployeeClient.getAllEmployees().then(responce => {
            setEmployees([...employees, ...responce])
        })
    },[])

    const removeEmployee = (id:number):void => {
        setEmployees(employees.filter(worker => worker.id !==id));
        EmployeeClient.deleteEmployee(id);
    }

    return(
        <div>
            {employees.map((item) => {
              return  <EmployeeItem key={item.id} employee={item} removeEmployee={removeEmployee} />
            })}
        </div>
    )
}

export default Employees;