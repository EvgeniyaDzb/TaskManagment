export interface IProject {
    id: number;
    name: string;
    description: string;
};

export const projectInitialState: IProject = {
    id : 0,
    name: '',
    description: ''
}