import React, { useState } from "react";
import { Button } from "../UI/button/Button";
import { Input } from "../UI/input/Input";
import { IProject, projectInitialState } from "./projectType";

interface IProjectForm {
    create: (newProject:IProject) => void
} 

export const ProjectForm = ({create}:IProjectForm) => {
    const [project, setProject] = useState<IProject>(projectInitialState)


    const addNewProject = (e: React.MouseEvent) => {
        e.preventDefault()
        const newProject = {
            ...project, id: Date.now()
        }
        create(newProject)
        setProject(projectInitialState)
    };

    return (
        <form>
            <Input
                value={project.name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setProject({ ...project, name: e.target.value })}
                type='text'
                placeholder='Project Name'
            />
            <Input
                value={project.description}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setProject({ ...project, description: e.target.value })}
                type='text'
                placeholder='Project description'
            />
            <Button onClick={addNewProject}>Add project</Button>
        </form>
    )
}