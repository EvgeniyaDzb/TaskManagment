import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../UI/button/Button";
import { Input } from "../UI/input/Input";
import { projectType } from "./projectType";

type createType ={
    create: (newProject:projectType)=>void;
} 

export const ProjectForm = ({create}:createType) => {
    const params = useParams();
    const [project, setProject] = useState<projectType>({id:0, name:'', description: ''})


    const addNewProject = (e: React.MouseEvent) => {
        e.preventDefault()

        const newProject = {
            ...project, id: Date.now()
        }

        create(newProject)
        setProject({id:0, name: '', description: '' })
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
                placeholder='Post description'
            />
            <Button handleClick={addNewProject}>Add project</Button>
        </form>
    )
}