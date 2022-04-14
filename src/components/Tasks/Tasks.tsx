import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TaskService from "../../API/Client/TaskService";
import { Task } from "../Types/tasks";
import { Button } from "../UI/button/Button";
import { TaskItem } from "./TaskItem";

const Tasks: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([])
    const navigate = useNavigate();

    useEffect(() => {
        TaskService.getAllTasks().then((response) => {
            setTasks([...tasks, ...response]);
        });
    }, [])
    const addTask = (event: React.MouseEvent) => {
        event.preventDefault();
        navigate(`/task/new`);

    }

    return (
        <div>
            <Button onClick={addTask}>Add new task</Button>
            {tasks.map(task => {
                return <TaskItem key={task.id} task={task}/>
            })}
        </div>

    )
}

export default Tasks;