import { Task } from './tasks';
export interface Project {
    id: number;
    title: string;
    description: string;
    tasks?: Task[];
};

export const projectInitialState: Project = {
    id : 0,
    title: '',
    description: '',
    tasks: []
}