import { IEmployee } from "../../components/Types/employee";

const myHeaders = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json"
});

export default class EmployeeEntiti {
    static async getAllEmployees(): Promise<IEmployee[]> {
        return await fetch('/api/employees',
            {
                method: "GET",
                headers: myHeaders,
            })
            .then((response) => response.json())
            .then((data) =>
                data as Promise<IEmployee[]>
            );
    }

    static async deleteEmployee(id:number):Promise<void> {
        await fetch(`/api/employees/${id}`,  
           {
               method: 'DELETE',
               headers: myHeaders,
           })
           // .then(() => console.log("delete"))
   }


}