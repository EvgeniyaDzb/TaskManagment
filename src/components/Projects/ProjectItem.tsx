import React from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "../UI/box/Box";
import { Button } from "../UI/button/Button";
import { IProject } from "../Types/project";
import "./styles/Project.css"

interface IProjectItem extends IProject {
    removeProject: (id: number) => void
}

export const ProjectItem = ({ id, name, description, removeProject }: IProjectItem) => {
    const navigate = useNavigate();

    function editProject(event: React.MouseEvent) {
        event.preventDefault();
        navigate(`/project/${id}`);
    }
    

    return (
        <Box id={id} title={name} body={description}>
            <div className='projectItem_btns'>
                <Button onClick={editProject}>Edit project</Button>
                <Button onClick={() => removeProject(id)}>Remove project</Button>
            </div>
        </Box>
    )
}