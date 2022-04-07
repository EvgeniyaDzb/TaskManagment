export interface IWorker {
    id: number;
    taskId: number;
    surname: string;
    name: string;
    patronymic: string;
    position: string;
};

export const workerInitialState: IWorker = {
    id : 0,
    taskId : 0,
    surname: '',
    name: '',
    patronymic: '',
    position: '',
}