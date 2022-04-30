import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../UI/button/Button";
import { Input } from "../UI/input/Input";
import { projectInitialState, Project } from "../../Types/project";
import ProjectsService from "../../API/Service/ProjectsService";
import { Task } from "../../Types/tasks";
import TaskService from "../../API/Service/TaskService";
import { Employee } from "../../Types/employee";
import EmployeeService from "../../API/Service/EmployeeService";
import TaskItem from "../Tasks/TaskItem";


export const ProjectIdPage: React.FC = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [project, setProject] = useState<Project>(projectInitialState);
    const [tasks, setTasks] = useState<Task[]>([]);
    const [employees, setEmployees] = useState<Employee[]>([]);
    const navigateToProgects = () => navigate("/progects");

    const updateProject = () => {
        const updateProject = {
            ...project
        }
        ProjectsService.updateProject(updateProject);
        navigateToProgects();
    }

    const addNewProject = () => {
        const newProject = {
            ...project, id: Date.now()
        }
        ProjectsService.postProject(newProject);
        navigateToProgects();
    };

    const removeTask = (id:number):void => {
        setTasks(tasks.filter(task => task.id !==id));
        TaskService.deleteTask(id);
    }

    useEffect(() => {
        if (params.id) {
            ProjectsService.getProjectById(Number(params.id)).then((response) => {
                setProject(response);
            });
            TaskService.getAllTasks().then((response) => {
                let taskByProjectId = response.filter(task => task.projectId === Number(params.id));
                setTasks(taskByProjectId);
            });
            EmployeeService.getAllEmployees().then((response) => {
                setEmployees(response);
            })
        }
    }, [])


    return (
        <div>
            <form>
                <Input
                    value={project.title}
                    onChange={(value) => setProject({ ...project, title: value })}
                    type='text'
                    placeholder='Project Name'
                />
                <Input
                    value={project.description}
                    onChange={(value) => setProject({ ...project, description: value })}
                    type='text'
                    placeholder='Project description'
                />
                {params.id ? <Button onClick={updateProject}>Update project</Button> :
                    <Button onClick={addNewProject}>Add project</Button>}
                    <Button onClick={navigateToProgects}>Сancel</Button>

            </form>
            {tasks.map(task => {
                const employee = employees.find((employee) => Number(employee.id) === task.employeeId);
                return <TaskItem key={task.id} task={task} project={project} showProject={false} employee={employee} removeTask={removeTask}/>
            })}
        </div>
    )
}