import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../../API/Client/EmployeeService";
import ProjectsService from "../../API/Client/ProjectsService";
import TaskService from "../../API/Client/TaskService";
import { Employee, employeeInitialState } from "../../Types/employee";
import { Project, projectInitialState } from "../../Types/project";
import { Task, taskInitialState } from "../../Types/tasks";
import { Button } from "../UI/button/Button";
import TaskItem from "./TaskItem";

const Tasks: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([])
    const [projects, setProjects] = useState<Project[]>([]);
    const [employees, setEmployees] = useState<Employee[]>([])
    const navigate = useNavigate();

    useEffect(() => {
        TaskService.getAllTasks().then((response) => {
            setTasks([...tasks, ...response])
        });
        
        ProjectsService.getAllProject().then((response) => {
            setProjects(response);
        });
 
        EmployeeService.getAllEmployees().then((response) => {
            setEmployees(response);
         })
    }, [])

    const addTask = (event: React.MouseEvent) => {
        event.preventDefault();
        navigate(`/task/new`);
    }

    return (
        <div>
            <Button onClick={addTask}>Add new task</Button>
            {tasks.map(task => {
                const project = projects.find((project) => Number(project.id) === task.projectId);
                const employee = employees.find((employee) => Number(employee.id) === task.employeeId);

                return <TaskItem key={task.id} task={task} project={project} employee={employee}/>
            })}
        </div>
    )
}

export default Tasks;