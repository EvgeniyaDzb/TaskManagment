import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../UI/button/Button";
import { ProjectItem } from "./ProjectItem";
import { Project } from "../../Types/project";
import ProjectsService from "../../API/Client/ProjectsService";

const Projects: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const navigate = useNavigate();

    useEffect(()=>{
        ProjectsService.getAllProject().then((response) => {
            setProjects([...projects, ...response]);
        });
        
    },[])

    const removeProject = (id:number):void => {
        setProjects(projects.filter(project => project.id !==id));
        ProjectsService.deleteProject(id);
    }

    function addProject() {
        navigate(`/project/new`);
    }
    return(
        <div>
        {/* <div className="boxContainer"> */}
            
            <Button onClick={addProject}>Add new project</Button>
            {projects.map((item)=>{
             return  <ProjectItem key={item.id} id={item.id} title={item.title} description={item.description} removeProject={removeProject}/>     
            })}
        </div>
    )
}

export default Projects;