import { Task } from '../../components/Types/tasks';

const myHeaders = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json"
});

export default class TaskService {
    static async getAllTasks(): Promise<Task[]> {
        return await fetch('/api/tasks',
            {
                method: "GET",
                headers: myHeaders,
            })
            .then((response) => response.json())
            .then((data) =>
                data as Promise<Task[]>
            );
    }

    static async getTaskById(id:number): Promise<Task> {
        return await fetch(`/api/task/${id}`,
        {
            method: "GET",
            headers: myHeaders,
        })
        .then((response) => response.json())
        .then((data) =>
            data as Promise<Task>
        );
    }

    static async deleteTask(id: number): Promise<void> {
        await fetch(`/api/task/${id}`,
            {
                method: 'DELETE',
                headers: myHeaders,
            })
    }
}