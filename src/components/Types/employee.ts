import { Task } from './tasks';
export interface Employee {
    id: number;
    surname: string;
    name: string;
    patronymic: string;
    position: string;
    tasks?: Task[]
};

export const employeeInitialState: Employee = {
    id : 0,
    surname: '',
    name: '',
    patronymic: '',
    position: '',
    tasks: []
}