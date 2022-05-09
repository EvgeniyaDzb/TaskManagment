import { useEffect, useState } from "react";
import TaskService from "../../API/Service/TaskService";
import { Employee } from "../../Types/employee";
import { Project } from "../../Types/project";
import { Task, taskInitialState, TaskStatus } from "../../Types/tasks";
import { Button } from "../UI/button/Button";
import { Input } from "../UI/input/Input";
import { Select } from "../UI/select/Select";

interface TaskFormProps{
    // taskProps: Task;
    taskId: number;
    projects: Project[];
    employees: Employee[];
    taskExist: boolean;
    updateTask: (task: Task) => void;
    addNewTask: (task: Task) => void;
    navigateToPreviousPage: () => void
}

export const TaskForm = ({taskId, taskExist, projects, employees, updateTask, addNewTask, navigateToPreviousPage} : TaskFormProps) => {

    const [task, setTask] = useState<Task>(taskInitialState);

    
    useEffect(() => {
     if(taskExist) {
        TaskService.getTaskById(taskId).then((response) => {
            setTask(response);
        });
     } 
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
                    // disabled
                    defaultValue='Project Title'
                    options={projects.map((project:Project) => {
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
                    options={employees.map((employee:Employee) => {
                        return { value: employee.id, name: employee.surname + ' ' + employee.name + ' ' + employee.patronymic };
                    })}
                />

                {taskExist
                    ? <Button onClick={() => updateTask(task)}>Update task</Button>
                    : <Button onClick={() => addNewTask(task)}>Add task</Button>
                }

                <Button onClick={navigateToPreviousPage}>Cancel</Button>

            </form>
        </div>
    );
}