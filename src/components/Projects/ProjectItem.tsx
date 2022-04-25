import React from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "../UI/box/Box";
import { Button } from "../UI/button/Button";
import { Project } from "../../Types/project";
import "./styles/Project.css"

interface ProjectItem extends Project {
    removeProject: (id: number) => void
}

export const ProjectItem = ({ id, title, description, removeProject }: ProjectItem) => {
    const navigate = useNavigate();

    function editProject() {
        navigate(`/project/${id}`);
    }
    

    return (
        <Box id={id} title={title} body={description}>
            <div className='projectItem_btns'>
                <Button onClick={editProject}>Edit project</Button>
                <Button onClick={() => removeProject(id)}>Remove project</Button>
            </div>
        </Box>
    )
}