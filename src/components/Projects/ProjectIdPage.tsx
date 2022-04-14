import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../UI/button/Button";
import { Input } from "../UI/input/Input";
import { projectInitialState, Project } from "../Types/project";
import ProjectsService from "../../API/Client/ProjectsService";
import { TaskItem } from "../Tasks/TaskItem";


export const ProjectIdPage: React.FC = () => {
    const params = useParams();
    const [project, setProject] = useState<Project>(projectInitialState)

    const updateProject = (e: React.MouseEvent) => {
        e.preventDefault()
        const updateProject = {
            ...project
        }
        ProjectsService.updateProject(updateProject)
    }

    const addNewProject = (e: React.MouseEvent) => {
        e.preventDefault()
        const newProject = {
            ...project, id: Date.now()
        }
        ProjectsService.postProject(newProject)
        setProject(projectInitialState)
    };

    useEffect(() => {
        if (params.id) {
            ProjectsService.getProjectById(Number(params.id)).then((response) => {
                setProject(response);
            });
        }
    }, [])


    return (
        <div>
            <form>
                <Input
                    value={project.title}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setProject({ ...project, title: e.target.value })}
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
            {project.tasks?.map(task => {
                return <TaskItem key={task.id} task={task} />
            })}
        </div>
    )
}