import React from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "../UI/box/Box";
import { Button } from "../UI/button/Button";
import { projectType } from "./projectType";

export const ProjectItem = ({id, name, description}:projectType )=> {
    const navigate = useNavigate();

    function editProject(event: React.MouseEvent) {
        event.preventDefault();
        navigate(`/project/${id}`);
    }

    return (
        <Box id={id} title={name} body={description}>
            <Button handleClick={editProject}>Edit project</Button>
        </Box>
    )
}