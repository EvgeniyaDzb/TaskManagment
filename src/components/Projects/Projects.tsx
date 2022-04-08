import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../UI/button/Button";
import { ProjectItem } from "./ProjectItem";
import { IProject } from "../Types/project";
import ProjectsEntity from "../../API/Client/ProjectsEntity";

const Projects: React.FC = () => {
    const [projects, setProjects] = useState<IProject[]>([]);
    const navigate = useNavigate();

    useEffect(()=>{
        ProjectsEntity.getAllProject().then((response) => {
            setProjects([...projects, ...response]);
        });
        
    },[])

    const removeProject = (id:number):void => {
        setProjects(projects.filter(project => project.id !==id));
        ProjectsEntity.deleteProject(id);
    }

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