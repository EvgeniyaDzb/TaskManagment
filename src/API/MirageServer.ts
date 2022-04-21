import { Task } from '../Types/tasks';
import { Employee } from '../Types/employee';
import { Project } from '../Types/project';
import { belongsTo, createServer, hasMany, Model } from "miragejs";
import JSON_DATA from "./db.json";

export function makeServer({ environment = "test" }) {
    return createServer({
        environment,

        models: {
            projects: Model.extend<Project[]>([]),
            tasks: Model.extend<Partial<Task[]>>([]),
            employees: Model.extend<Partial<Employee[]>>([]),          
        },

        seeds(server) {
            server.db.loadData(JSON_DATA);
        },

        routes() {
            this.namespace = "/api";

            this.get("/projects", (schema, request) => {
                return schema.db.projects;
            });

            this.post("/projects", (schema, request) => {
                let attrs = JSON.parse(request.requestBody);
                schema.db.projects.insert(attrs);
                return schema.db.projects;
            });

            this.get("/projects/:id", (schema, request) => {
                let id = request.params.id;
                let project = schema.db.projects.find(id);
                // project.tasks = schema.db.tasks.where({ projectId: id });
                // project.tasks.map(task =>{
                //     task.employee = schema.db.employees.findBy({ id: task.employeeId})
                //  })
                return project;
            })

            this.patch('/projects/:id', (schema, request) => {
                let newAttrs = JSON.parse(request.requestBody);
                let id = request.params.id;
                schema.db.projects.update(id, newAttrs);
                return schema.db.projects;
            })

            this.delete('/projects/:id', (schema, request) => {
                let id = request.params.id;
                schema.db.projects.remove(id);
                return schema.db.projects;
            })

            this.get("/employees", (schema, request) => {
                return schema.db.employees;
            });

            this.get("/employee/:id", (schema, request) => {
                let id = request.params.id
                return schema.db.employees.find(id)
            });

            this.delete('/employees/:id', (schema, request) => {
                let id = request.params.id;
                schema.db.employees.remove(id);
                return schema.db.employees;
            })

            this.patch('/employees/:id', (schema, request) => {
                let newAttrs = JSON.parse(request.requestBody);
                let id = request.params.id;
                schema.db.employees.update(id, newAttrs);
                return schema.db.employees;
            })

            this.post("/employees", (schema, request) => {
                let attrs = JSON.parse(request.requestBody);
                schema.db.employees.insert(attrs);
                return schema.db.employees;
            });

            this.get("/tasks", (schema, request) => {
                let tasks = schema.db.tasks;
                return tasks;
            });

            this.delete('/task/:id', (schema, request) => {
                let id = request.params.id;
                schema.db.tasks.remove(id);
                return schema.db.tasks;
            })

            this.get("/task/:id", (schema, request) => {
                let id = request.params.id;
                let task = schema.db.tasks.find(id);
                return task;
            })

            this.patch('/task/:id', (schema, request) => {
                let newAttrs = JSON.parse(request.requestBody);
                let id = request.params.id;
                schema.db.tasks.update(id, newAttrs);
                return schema.db.tasks;
            })

            
            this.post("/task", (schema, request) => {
                let attrs = JSON.parse(request.requestBody);
                schema.db.tasks.insert(attrs);
                return schema.db.tasks;
            });
        },
    });
}