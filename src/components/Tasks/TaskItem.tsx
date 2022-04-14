import React from "react";
import { useNavigate } from "react-router-dom";
import TaskService from "../../API/Client/TaskService";
import { Task } from "../Types/tasks";
import { Box } from "../UI/box/Box";
import { Button } from "../UI/button/Button";

interface TaskItem {
    task: Task
}

export const TaskItem = ({task}:TaskItem) => {
    const navigate = useNavigate();

    function editTask(event: React.MouseEvent) {
        event.preventDefault();
        navigate(`/task/${task.id}`);
    }
    const removeTask = (id:number):void => {
        TaskService.deleteTask(id);
    }

    return (<Box id={task.id}>
        <p><strong>Task № </strong>{task.id}</p>
        <p><strong>Title: </strong>{task.title}</p>
        <p><strong>Project: </strong>{task.project?.title}</p>
        <p><strong>Status: </strong>{task.status}</p>
        <p><strong>Description: </strong>{task.description}</p>
        <p><strong>From: </strong>{task.beginDate}</p>
        <p><strong>To: </strong>{task.endDate}</p>
        <p><strong>Executor: </strong>{task.employee?.surname} {task.employee?.name} {task.employee?.patronymic}</p>

        <Button onClick={editTask}>Edit task</Button>
        <Button onClick={() => removeTask(task.id)}>Delete</Button>
    </Box>
    );
};