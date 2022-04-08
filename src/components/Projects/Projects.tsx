import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../UI/button/Button";
import { ProjectItem } from "./ProjectItem";
import { IProject } from "../Types/project";
import ProjectsClient from "../../API/Client/ProjectsClient";

const Projects: React.FC = () => {
    const [projects, setProjects] = useState<IProject[]>([]);

    const removeProject = (id:number):void => {
        setProjects(projects.filter(project => project.id !==id));
        ProjectsClient.deleteProject(id);
    }

    useEffect(()=>{
        ProjectsClient.getAllProject().then((response) => {
            setProjects([...projects, ...response]);
        });
        
    },[])

    const navigate = useNavigate();
    function addProject(event: React.MouseEvent) {
        event.preventDefault();
        navigate(`/project/new`);
    }
    return(
        <div>
        {/* <div className="boxContainer"> */}
            
            <Button onClick={addProject}>Add new project</Button>

            {projects.map((item)=>{
             return  <ProjectItem key={item.id} id={item.id} name={item.name} description={item.description} removeProject={removeProject}/>     
            })}
        </div>
    )
}

export default Projects;