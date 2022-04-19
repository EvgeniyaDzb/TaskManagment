import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../UI/button/Button";
import { Input } from "../UI/input/Input";
import { projectInitialState, Project } from "../../Types/project";
import ProjectsService from "../../API/Client/ProjectsService";
import { Task } from "../../Types/tasks";
import TaskService from "../../API/Client/TaskService";
import { Employee } from "../../Types/employee";
import EmployeeService from "../../API/Client/EmployeeService";
import TaskItem from "../Tasks/TaskItem";


export const ProjectIdPage: React.FC = () => {
    const params = useParams();
    const [project, setProject] = useState<Project>(projectInitialState);
    const [tasks, setTasks] = useState<Task[]>([])
    const [employees, setEmployees] = useState<Employee[]>([])

    const updateProject = (e: React.MouseEvent) => {
        e.preventDefault()
        const updateProject = {
            ...project
        }
        ProjectsService.updateProject(updateProject)
    }

    const addNewProject = (e: React.MouseEvent) => {
        e.preventDefault()
        const newProject = {
            ...project, id: Date.now()
        }
        ProjectsService.postProject(newProject)
        setProject(projectInitialState)
    };

    useEffect(() => {
        if (params.id) {
            ProjectsService.getProjectById(Number(params.id)).then((response) => {
                setProject(response);
            });
            TaskService.getAllTasks().then((response) => {
                let taskByProjectId = response.filter(task => task.projectId === project.id);
                setTasks(taskByProjectId)
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
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setProject({ ...project, title: e.target.value })}
                    type='text'
                    placeholder='Project Name'
                />
                <Input
                    value={project.description}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setProject({ ...project, description: e.target.value })}
                    type='text'
                    placeholder='Project description'
                />
                {params.id ? <Button onClick={updateProject}>Update project</Button> :
                    <Button onClick={addNewProject}>Add project</Button>}

            </form>
            {tasks.map(task => {
                const employee = employees.find((employee) => Number(employee.id) === task.employeeId);
                return <TaskItem key={task.id} task={task} project={project} employee={employee}/>
            })}
        </div>
    )
}