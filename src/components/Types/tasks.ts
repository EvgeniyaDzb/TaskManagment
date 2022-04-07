export interface ITask {
    id: number;
    projectId: number;
    status: string;
    name: string;
    description: string;
    beginDate: Date;
    endDate: Date;
};

export const taskInitialState: ITask = {
    id : 0,
    projectId: 0,
    status: '',
    name: '',
    description: '',
    beginDate: new Date(),
    endDate: new Date(),
}