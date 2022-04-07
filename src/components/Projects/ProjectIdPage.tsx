import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Service from "../../API/Service";
import { Button } from "../UI/button/Button";
import { Input } from "../UI/input/Input";
import { projectInitialState, IProject } from "../Types/project";

interface IProjectIdPage extends IProject {
    create?: (newProject:IProject) => void
} 

export const ProjectIdPage = ({create}:IProjectIdPage) => {
    const params = useParams();
    const [project, setProject] = useState<IProject>(projectInitialState)

    const updateProject = (e: React.MouseEvent) => {
        e.preventDefault()
        console.log(project)
        const updateProject = {
            ...project
        }
        Service.updateProject(updateProject)

    }

    const addNewProject = (e: React.MouseEvent) => {
        e.preventDefault()
        const newProject = {
            ...project, id: Date.now()
        }
        Service.postProject(newProject)
        setProject(projectInitialState)
    };

    useEffect(() => {
        if(params.id){
            Service.getProjectById(Number(params.id)).then((response) => {
                setProject(response);
            });
        }
    }, [])


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
            {params.id ? <Button onClick={updateProject}>Update project</Button> :
            <Button onClick={addNewProject}>Add project</Button>}
        </form>
    )
}