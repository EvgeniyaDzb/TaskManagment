import { IWorker } from './../components/Types/workers';
import { IProject } from '../components/Types/project';

const myHeaders = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json"
});


export default class Service {
    static async getAllProject(): Promise<IProject[]> {
        return await fetch('/api/projects',
            {
                method: "GET",
                headers: myHeaders,
            })
            .then((response) => response.json())
            .then((data) =>
                data as Promise<IProject[]>
            );
    }

    static async getProjectById(id: number): Promise<IProject> {
        return await fetch(`/api/projects/${id}`,
            {
                method: "GET",
                headers: myHeaders
            })
            .then((response) => response.json())
            .then((data) =>
                data as Promise<IProject>
            );
    }

    static async postProject(project: IProject): Promise<void> {
        await fetch('/api/projects',
            {
                method: "POST",
                headers: myHeaders,
                body: JSON.stringify(project)
            })
    }

    static async deleteProject(id: number): Promise<void> {
        await fetch(`/api/projects/${id}`,
            {
                method: 'DELETE',
                headers: myHeaders,
            })
        // .then(() => console.log("delete"))
    }

    static async updateProject(project: IProject): Promise<void> {
        await fetch(`/api/projects/${project.id}`,
            {
                method: "PATCH",
                headers: myHeaders,
                body: JSON.stringify(project)
            })
    }

    static async getAllWorkers(): Promise<IWorker[]> {
        return await fetch('/api/workers',
            {
                method: "GET",
                headers: myHeaders,
            })
            .then((response) => response.json())
            .then((data) =>
                data as Promise<IWorker[]>
            );
    }

    static async deleteWorker(id:number):Promise<void> {
        await fetch(`/api/workers/${id}`,  
           {
               method: 'DELETE',
               headers: myHeaders,
           })
           // .then(() => console.log("delete"))
   }


}