import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../../API/Service/EmployeeService";
import ProjectsService from "../../API/Service/ProjectsService";
import TaskService from "../../API/Service/TaskService";
import { Employee } from "../../Types/employee";
import { Project } from "../../Types/project";
import { Task, taskInitialState, TaskStatus } from "../../Types/tasks";
import { Button } from "../UI/button/Button";
import { Input } from "../UI/input/Input";
import { Select } from "../UI/select/Select";
import { TaskForm } from "./TaskForm";

export const TaskIdPage: React.FC = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [task, setTask] = useState<Task>(taskInitialState);
    const [projects, setProjects] = useState<Project[]>([]);
    const [employees, setEmployees] = useState<Employee[]>([]);
    const navigateToPreviousPage = () => navigate(-1);

    const updateTask = (task:Task) => {
        const updateTask = {
            ...task
        }
        TaskService.updateTask(updateTask);
        navigateToPreviousPage()
    }

    const addNewTask = (task:Task) => {
        const newTask = {
            ...task, id: Date.now()
        }
        TaskService.postTask(newTask);
        navigateToPreviousPage();
    };

    useEffect(() => {
        // if (params.id) {
        //     TaskService.getTaskById(Number(params.id)).then((response) => {
        //         setTask(response);
        //     });
        // }
        ProjectsService.getAllProject().then(response => setProjects(response));
        EmployeeService.getAllEmployees().then(response => setEmployees(response))
    }, [])



    return (
        <TaskForm
            // taskProps={task}
            taskId={Number(params.id)}
            taskExist={true}
            projects={projects}
            employees={employees}
            updateTask={updateTask}
            addNewTask={addNewTask}
            navigateToPreviousPage={navigateToPreviousPage}
        />
    );
}