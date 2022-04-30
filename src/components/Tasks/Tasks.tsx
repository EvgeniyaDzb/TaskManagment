import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../../API/Service/EmployeeService";
import ProjectsService from "../../API/Service/ProjectsService";
import TaskService from "../../API/Service/TaskService";
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

    const addTask = () => {
        navigate(`/task/new`);
    }

    const removeTask = (id:number):void => {
        setTasks(tasks.filter(task => task.id !==id));
        TaskService.deleteTask(id);
    }

    return (
        <div>
            <Button onClick={addTask}>Add new task</Button>
            {tasks.map(task => {
                const project = projects.find((project) => Number(project.id) === task.projectId);
                const employee = employees.find((employee) => Number(employee.id) === task.employeeId);

                return <TaskItem key={task.id} task={task} project={project} showProject employee={employee} removeTask={removeTask}/>
            })}
        </div>
    )
}

export default Tasks;