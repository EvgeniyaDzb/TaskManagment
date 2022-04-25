import React from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "../UI/box/Box";
import { Button } from "../UI/button/Button";
import { Employee } from "../../Types/employee";

interface EmployeeItem {
    employee: Employee
    removeEmployee: (id: number) => void
}

export const EmployeeItem = ({ employee, removeEmployee }: EmployeeItem) => {
    const navigate = useNavigate();

    function editEmployee() {
        navigate(`/employee/${employee.id}`);
    }


    return (
        <Box id={employee.id}>
            <div>
                <p><strong>Surname </strong>{employee.surname}</p>
                <p><strong>Name </strong>{employee.name}</p>
                <p><strong>Patronymic </strong>{employee.patronymic}</p>
            </div>
            <p><strong>Position </strong>{employee.position}</p>
            <Button onClick={editEmployee}>Edit</Button>
            <Button onClick={() => removeEmployee(employee.id)}>Remove</Button>
        </Box>
    )
}