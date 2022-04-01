import React, { useEffect, useState } from "react";
import { ProjectForm } from "./ProjectForm";
import { ProjectItem } from "./ProjectItem";
import { projectType } from "./projectType";

const Projects: React.FC = () => {

    const projectsList = [
        {id: 1, name: "First project name", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi similique, velit deserunt animi eveniet odit hic tenetur quibusdam, et ipsa voluptatem ducimus! Nesciunt obcaecati, similique laboriosam beatae iure suscipit doloremque."},
        {id: 2, name: "Second project name", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi similique, velit deserunt animi eveniet odit hic tenetur quibusdam, et ipsa voluptatem ducimus! Nesciunt obcaecati, similique laboriosam beatae iure suscipit doloremque."},
        {id: 3, name: "Third Project name", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi similique, velit deserunt animi eveniet odit hic tenetur quibusdam, et ipsa voluptatem ducimus! Nesciunt obcaecati, similique laboriosam beatae iure suscipit doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi similique, velit deserunt animi eveniet odit hic tenetur quibusdam, et ipsa voluptatem ducimus! Nesciunt obcaecati, similique laboriosam beatae iure suscipit doloremque."},
    ]

    const [projects, setProjects] = useState<projectType[]>([]);

    const createNewProject = (newProject:projectType) => {
        setProjects([...projects, newProject])
        console.log("Add project", projects)
    }
    useEffect(()=>{
        setProjects([...projects, ...projectsList])
        console.log(projects)
    },[])

    return(
        <div className="boxContainer">
            {/* <ProjectForm create={createNewProject}/> */}

            {projects.map((item)=>{
             return <div key={item.id}>
                 <ProjectItem id={item.id} name={item.name} description={item.description}/>
             </div>
            })}
        </div>
    )
}

export default Projects;