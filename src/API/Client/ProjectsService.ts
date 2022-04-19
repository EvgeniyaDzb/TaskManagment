import { Project } from "../../Types/project";


const myHeaders = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json"
});


export default class ProjectsService {
    static async getAllProject(): Promise<Project[]> {
        return await fetch('/api/projects',
            {
                method: "GET",
                headers: myHeaders,
            })
            .then((response) => response.json())
            .then((data) =>
                data as Promise<Project[]>
            );
    }

    static async getProjectById(id: number): Promise<Project> {
        return await fetch(`/api/projects/${id}`,
            {
                method: "GET",
                headers: myHeaders
            })
            .then((response) => response.json())
            .then((data) =>
                data as Promise<Project>
            );
    }

    static async postProject(project: Project): Promise<void> {
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

    static async updateProject(project: Project): Promise<void> {
        await fetch(`/api/projects/${project.id}`,
            {
                method: "PATCH",
                headers: myHeaders,
                body: JSON.stringify(project)
            })
    }
}