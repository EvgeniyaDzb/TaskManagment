import { IProject } from './../components/Projects/projectType';

const myHeaders = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json"
});


export default class Service {
    static async getAllProject():Promise<IProject[]> {
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

    static async getProjectById(id:number):Promise<IProject> {
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

    static async postProject(project:IProject):Promise<void> {
         await fetch('/api/projects', 
            {
                method: "POST",
                headers: myHeaders,
                body: JSON.stringify(project)
            })
    }

    static async delProject(id:number):Promise<void> {
         await fetch('../db.json/projects/'+id, 
            {
                method: 'DELETE',
                headers: myHeaders,
            })
            .then(() => console.log("delete"))
    }


}