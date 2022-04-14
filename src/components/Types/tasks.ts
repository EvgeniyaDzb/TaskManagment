import { Project, projectInitialState } from './project';
import { Employee, employeeInitialState } from './employee';


export enum TaskStatus {
    NotStarted = "Not Started",
    Progress = "In Progress",
    Completed = "Completed",
    Postpone = "In Postpone"
}

export interface Task {
    id: number;
    projectId?: number;
    project?: Project;
    employeeId?: number;
    employee?: Employee;
    status: TaskStatus;
    title: string;
    description: string;
    beginDate: Date;
    endDate: Date;
};

export const taskInitialState: Task = {
    id : 0,
    projectId: 0,
    project: projectInitialState,
    employeeId: 0,
    employee: employeeInitialState,
    status: TaskStatus.NotStarted,
    title: '',
    description: '',
    beginDate: new Date(),
    endDate: new Date(),
}
