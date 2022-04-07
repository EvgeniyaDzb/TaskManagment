import React from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "../UI/box/Box";
import { Button } from "../UI/button/Button";
import { IWorker } from "../Types/workers";

interface IWorkerItem {
    worker: IWorker
    removeWorker: (id: number) => void
}

export const WorkerItem = ({ worker, removeWorker }: IWorkerItem) => {
    const navigate = useNavigate();

    function editWorker(event: React.MouseEvent) {
        event.preventDefault();
        console.log("editWorker")
        // navigate(`/workers/${worker.id}`);
    }
    

    return (
        <Box id={worker.id} title={worker.surname + worker.name + worker.patronymic} body={worker.position}>
            <div>
                <Button onClick={editWorker}>Edit</Button>
                <Button onClick={() => removeWorker(worker.id)}>Remove</Button>
            </div>
        </Box>
    )
}