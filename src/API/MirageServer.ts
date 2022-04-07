import { ITask } from './../components/Types/tasks';
import { IWorker } from './../components/Types/workers';
import { IProject, projectInitialState } from '../components/Types/project';
import { createServer, Model } from "miragejs";
import JSON_DATA from "./db.json";

export function makeServer({ environment = "test" }) {
    return createServer({
        environment,

        models: {
            projects: Model.extend<IProject[]>([]),
            tasks: Model.extend<Partial<ITask[]>>([]),
            workers: Model.extend<Partial<IWorker[]>>([]),
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
                let id = request.params.id
                return schema.db.projects.find(id)
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

            this.get("/workers", (schema, request) => {
                return schema.db.workers;
            });

            this.delete('/workers/:id', (schema, request) => {
                let id = request.params.id;
                schema.db.workers.remove(id);
                return schema.db.workers;

            })
        },
    });
}