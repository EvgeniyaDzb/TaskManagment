import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EmployeeService from "../../API/Client/EmployeeService";
import ProjectsService from "../../API/Client/ProjectsService";
import TaskService from "../../API/Client/TaskService";
import { Employee } from "../../Types/employee";
import { Project } from "../../Types/project";
import { Task, taskInitialState, TaskStatus } from "../../Types/tasks";
import { Button } from "../UI/button/Button";
import { Input } from "../UI/input/Input";
import { Select } from "../UI/select/Select";

export const TaskIdPage: React.FC = () => {
    const params = useParams();
    const [task, setTask] = useState<Task>(taskInitialState);
    const [projects, setProjects] = useState<Project[]>([]);
    const [employees, setEmployees] = useState<Employee[]>([])

    const updateTask = (e: React.MouseEvent) => {
        e.preventDefault()
        const updateTask = {
            ...task
        }
        // ProjectsService.updateProject(updateProject)
    }

    const addNewTask = (e: React.MouseEvent) => {
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
        ProjectsService.getAllProject().then(response => setProjects(response));
        EmployeeService.getAllEmployees().then(response => setEmployees(response))
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
                <Select value={task.projectId}
                    onChange={value => setTask({ ...task, projectId: Number(value) })}
                    defaultValue='Project Title'
                    options={projects.map((project) => {
                        return { value: project.id, name: project.title };
                    })}
                />
                <Input
                    value={task.description}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTask({ ...task, description: e.target.value })}
                    type='text'
                    placeholder='Task description'
                />
                <Input type="date"
                    value={task.beginDate}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTask({ ...task, beginDate: e.target.value })} 
                />
                <Input type="date"
                    value={task.endDate}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTask({ ...task, endDate: e.target.value })} 
                />

                <Select value={task.status}
                    onChange={value => setTask({ ...task, status: value as TaskStatus })}
                    defaultValue='Task Status'
                    options={Object.entries(TaskStatus).map(([key, value]) => {
                        return { value: key, name: value };
                    })}
                />

                <Select value={task.employeeId}
                    onChange={value => setTask({ ...task, employeeId: Number(value) })}
                    defaultValue='Employee name'
                    options={employees.map((employee) => {
                        return { value: employee.id, name: employee.surname + ' ' + employee.name + ' ' + employee.patronymic };
                    })}
                />

                {params.id ? <Button onClick={updateTask}>Update task</Button> :
                    <Button onClick={addNewTask}>Add task</Button>}

            </form>
        </div>
    );
}