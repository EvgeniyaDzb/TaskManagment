import React from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "../UI/box/Box";
import { Button } from "../UI/button/Button";
import { IEmployee } from "../Types/employee";

interface IEmployeeItem {
    employee: IEmployee
    removeEmployee: (id: number) => void
}

export const EmployeeItem = ({ employee, removeEmployee }: IEmployeeItem) => {
    const navigate = useNavigate();

    function editEmployee(event: React.MouseEvent) {
        event.preventDefault();
        navigate(`/employee/${employee.id}`);
    }
    

    return (
        <Box id={employee.id} title={employee.surname + employee.name + employee.patronymic} body={employee.position}>
            <div>
                <Button onClick={editEmployee}>Edit</Button>
                <Button onClick={() => removeEmployee(employee.id)}>Remove</Button>
            </div>
        </Box>
    )
}