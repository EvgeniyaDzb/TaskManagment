import { Employee } from "../../Types/employee";

const myHeaders = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json"
});

export default class EmployeeService {
    static async getAllEmployees(): Promise<Employee[]> {
        return await fetch('/api/employees',
            {
                method: "GET",
                headers: myHeaders,
            })
            .then((response) => response.json())
            .then((data) =>
                data as Promise<Employee[]>
            );
    }

    static async getEmployeeById(id: number): Promise<Employee> {
        return await fetch(`/api/employee/${id}`,
            {
                method: "GET",
                headers: myHeaders
            })
            .then((response) => response.json())
            .then((data) =>
                data as Promise<Employee>
            );
    }

    static async deleteEmployee(id: number): Promise<void> {
        await fetch(`/api/employees/${id}`,
            {
                method: 'DELETE',
                headers: myHeaders,
            })
        // .then(() => console.log("delete"))
    }

    static async postEmployee(employee: Employee): Promise<void> {
        await fetch('/api/employees',
            {
                method: "POST",
                headers: myHeaders,
                body: JSON.stringify(employee)
            })
    }
    static async updateEmployee(employee: Employee): Promise<void> {
        await fetch(`/api/employees/${employee.id}`,
            {
                method: "PATCH",
                headers: myHeaders,
                body: JSON.stringify(employee)
            })
    }


}