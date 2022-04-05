import { IProject } from './../components/Projects/projectType';

export default class Service {
    static async getAllProject():Promise<IProject[]> {
        return await fetch('./db.json', 
            {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then((response) => response.json())
            .then((data) =>
                data.projects as Promise<IProject[]>
            );
    }

    static async getProjectById(id:number):Promise<IProject> {
        return await fetch('../db.json', 
            {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then((response) => response.json())
            .then((data) =>
                data.projects.find((project:IProject) => project.id === id) as Promise<IProject>
            );
    }

    static async postProject(project:IProject):Promise<void> {
         await fetch('./db.json', 
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    project
                })
            })
            // .then((response) => response.json())
            // .then((data) =>
            //     data.projects.find((project:IProject) => project.id === id) as Promise<IProject>
            // );
    }
}