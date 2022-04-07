import { IProject, projectInitialState } from './../components/Projects/projectType';
import { createServer, Model } from "miragejs";
import JSON_DATA from "./db.json";

export function makeServer({ environment = "test" }) {
    return createServer({
        environment,

        models: {
            projects: Model.extend<IProject[]>([]),
            // project: Model.extend<Partial<IProject>>({}),
            // task: Model.extend<Partial<any>>(),
            // worker: Model.extend<Partial<any>>(),
        },

        seeds(server) {
             server.db.loadData(JSON_DATA);
            

        },

        routes() {
            this.namespace = "/api";

            this.get("/projects", (schema, request) => {
                return schema.db.projects; //.all();
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
        },
    });
}