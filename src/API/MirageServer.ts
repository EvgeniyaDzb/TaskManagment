import { IProject } from './../components/Projects/projectType';
import { createServer, Model, Factory } from "miragejs";
import JSON_DATA from "./db.json";
import { request } from 'http';

export function makeServer({ environment = "test" }) {
    return createServer({
        environment,

        // factories: {
        //     projects: Factory.extend<Partial<IProject[]>>({
        //     get projects() {
        //       return faker.name.firstName();
        //     },

        //   }),
        // },

        models: {
            projects: Model.extend<Partial<IProject[]>>([]),
            //   project: Model.extend<Partial<IProject>>({}),
            tasks: Model.extend<Partial<any[]>>([]),
            workers: Model.extend<Partial<any[]>>([]),
        },

        seeds(server) {
            server.db.loadData(JSON_DATA)
        },

        routes() {
            this.namespace = "/api";

            this.get("/projects", (schema, request) => {
                return schema.db.projects
            });

            this.post("/projects", (schema, request) => {
                let attrs = JSON.parse(request.requestBody);
                schema.create("projects", attrs); 
                return schema.db.projects;
            });

            this.get("/projects/:id", (schema, request) => {
                let id = request.params.id
              
                return schema.db.projects.find(id)
            })
        },
    });
}