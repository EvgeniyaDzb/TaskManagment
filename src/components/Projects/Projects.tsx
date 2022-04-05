import React, { useEffect, useState } from "react";
import Service from "../../API/Service";
import { useFetching } from "../../hooks/useFetching";
import { ProjectForm } from "./ProjectForm";
import { ProjectItem } from "./ProjectItem";
import { IProject } from "./projectType";

const Projects: React.FC = () => {
    const [projects, setProjects] = useState<IProject[]>([]);

    const createNewProject = (newProject:IProject) => {
        setProjects([...projects, newProject]);
    }
    
    const removeProject = (id:number):void => {
        setProjects(projects.filter(project => project.id !==id))
    }
    async function getData() {
        const response = await Service.getAllProject();
        setProjects([...projects, ...response]);
    }

    useEffect(()=>{
        // getData()
        Service.getAllProject().then((response) => {
            setProjects([...projects, ...response]);
        });
        
    },[])

    return(
        <div>
        {/* <div className="boxContainer"> */}
            <ProjectForm create={createNewProject}/>

            {projects.map((item)=>{
             return  <ProjectItem key={item.id} id={item.id} name={item.name} description={item.description} removeProject={removeProject}/>     
            })}
        </div>
    )
}

export default Projects;