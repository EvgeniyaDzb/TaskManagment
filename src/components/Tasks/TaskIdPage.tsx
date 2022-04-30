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

export const TaskIdPage: React.FC = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [task, setTask] = useState<Task>(taskInitialState);
    const [projects, setProjects] = useState<Project[]>([]);
    const [employees, setEmployees] = useState<Employee[]>([]);
    const navigateToPreviousPage = () => navigate(-1);

    const updateTask = () => {
        const updateTask = {
            ...task
        }
        TaskService.updateTask(updateTask);
        navigateToPreviousPage()
    }

    const addNewTask = () => {
        const newTask = {
            ...task, id: Date.now()
        }
        TaskService.postTask(newTask);
        navigateToPreviousPage();
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
                    onChange={(value) => setTask({ ...task, title: value })}
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
                    onChange={(value) => setTask({ ...task, description: value })}
                    type='text'
                    placeholder='Task description'
                />
                <Input type="date"
                    value={task.beginDate}
                    onChange={(value) => setTask({ ...task, beginDate: value })} 
                />
                <Input type="date"
                    value={task.endDate}
                    onChange={(value) => setTask({ ...task, endDate: value })} 
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

                {params.id 
                    ? <Button onClick={updateTask}>Update task</Button> 
                    : <Button onClick={addNewTask}>Add task</Button>
                }

                <Button onClick={navigateToPreviousPage}>Cancel</Button>

            </form>
        </div>
    );
}