export interface Employee {
    id: number;
    surname: string;
    name: string;
    patronymic: string;
    position: string
};

export const employeeInitialState: Employee = {
    id : 0,
    surname: '',
    name: '',
    patronymic: '',
    position: ''
}