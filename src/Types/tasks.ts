export enum TaskStatus {
    NotStarted = "Not Started",
    Progress = "In Progress",
    Completed = "Completed",
    Postpone = "In Postpone"
}

export interface Task {
    id: number;
    projectId: number;
    employeeId: number;
    status: TaskStatus;
    title: string;
    description: string;
    beginDate: string;
    endDate: string;
};

export const taskInitialState: Task = {
    id : 0,
    projectId: 0,
    employeeId: 0,
    status: TaskStatus.NotStarted,
    title: '',
    description: '',
    beginDate: '',
    endDate: '',
}