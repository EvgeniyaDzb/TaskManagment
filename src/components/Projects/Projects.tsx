import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Service from "../../API/Service";
import { Button } from "../UI/button/Button";
import { ProjectItem } from "./ProjectItem";
import { IProject } from "../Types/project";

const Projects: React.FC = () => {
    const [projects, setProjects] = useState<IProject[]>([]);

    const removeProject = (id:number):void => {
        setProjects(projects.filter(project => project.id !==id));
        Service.deleteProject(id);
    }

    useEffect(()=>{
        Service.getAllProject().then((response) => {
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