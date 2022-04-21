import React from "react";
import { useNavigate } from "react-router-dom";
import TaskService from "../../API/Client/TaskService";
import { Employee } from "../../Types/employee";
import { Project } from "../../Types/project";
import { Task } from "../../Types/tasks";
import { Box } from "../UI/box/Box";
import { Button } from "../UI/button/Button";

interface TaskItemProps{
    task: Task,
    project?: Project,
    employee?: Employee,
    removeTask: (id: number) => void
}

const TaskItem = ({ task, project, employee, removeTask}: TaskItemProps) => {
    const navigate = useNavigate();

    function editTask(event: React.MouseEvent) {
        event.preventDefault();
        navigate(`/task/${task.id}`);
    }

    return (<Box id={task.id}>
        <p><strong>Task № </strong>{task.id}</p>
        <p><strong>Title: </strong>{task.title}</p>
        <p><strong>Project: </strong>{project?.title}</p>
        <p><strong>Status: </strong>{task.status}</p>
        <p><strong>Description: </strong>{task.description}</p>
        <p><strong>From: </strong>{task.beginDate}</p>
        <p><strong>To: </strong>{task.endDate}</p>
        <p><strong>Executor: </strong>{employee?.surname + " " + employee?.name + " " + employee?.patronymic}</p>

        <Button onClick={editTask}>Edit task</Button>
        <Button onClick={() => removeTask(task.id)}>Delete</Button>
    </Box>
    );
};

export default TaskItem;