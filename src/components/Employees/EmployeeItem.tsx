import React from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "../UI/box/Box";
import { Button } from "../UI/button/Button";
import { IEmployee } from "../Types/employee";

interface IEmployeeItem {
    employee: IEmployee
    removeEmployee: (id: number) => void
}

export const EmployeeItem = ({ employee: worker, removeEmployee }: IEmployeeItem) => {
    const navigate = useNavigate();

    function editEmployee(event: React.MouseEvent) {
        event.preventDefault();
        console.log("editWorker")
        // navigate(`/workers/${worker.id}`);
    }
    

    return (
        <Box id={worker.id} title={worker.surname + worker.name + worker.patronymic} body={worker.position}>
            <div>
                <Button onClick={editEmployee}>Edit</Button>
                <Button onClick={() => removeEmployee(worker.id)}>Remove</Button>
            </div>
        </Box>
    )
}