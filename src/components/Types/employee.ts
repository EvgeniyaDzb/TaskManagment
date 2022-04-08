export interface IEmployee {
    id: number;
    taskId: number;
    surname: string;
    name: string;
    patronymic: string;
    position: string;
};

export const employeeInitialState: IEmployee = {
    id : 0,
    taskId : 0,
    surname: '',
    name: '',
    patronymic: '',
    position: '',
}