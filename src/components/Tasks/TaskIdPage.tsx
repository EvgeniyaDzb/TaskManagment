import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TaskService from "../../API/Client/TaskService";
import { Task, taskInitialState } from "../Types/tasks";
import { Button } from "../UI/button/Button";
import { Input } from "../UI/input/Input";

export const TaskIdPage: React.FC = () => {
    const params = useParams();
    const [task, setTask] = useState<Task>(taskInitialState)

    const updateTask = (e: React.MouseEvent) => {
        e.preventDefault()
        const updateTask = {
            ...task
        }
        // ProjectsService.updateProject(updateProject)
    }

    const addNewProject = (e: React.MouseEvent) => {
        e.preventDefault()
        const newProject = {
            ...task, id: Date.now()
        }
        // ProjectsService.postProject(newProject)
        setTask(taskInitialState)
    };

    useEffect(() => {
        if (params.id) {
            TaskService.getTaskById(Number(params.id)).then((response) => {
                setTask(response);
            });
        }
    }, [])


    return (
        <div>
            <form>
                <Input
                    value={task.title}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTask({ ...task, title: e.target.value })}
                    type='text'
                    placeholder='Task title'
                />
                <Input
                    value={task.description}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTask({ ...task, description: e.target.value })}
                    type='text'
                    placeholder='Task description'
                />
                {params.id ? <Button onClick={updateTask}>Update task</Button> :
                    <Button onClick={addNewProject}>Add task</Button>}

            </form>
        </div>
    );
}