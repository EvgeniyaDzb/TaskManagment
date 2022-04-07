import { ProjectIdPage } from "../components/Projects/ProjectIdPage";
import Projects from "../components/Projects/Projects";
import Tasks from "../components/Tasks/Tasks";
import Workers from "../components/Workers/Workers";


export const routes = [
    {path: '/', element: <Projects/>},
    {path: '/projects', element: <Projects/>},
    {path: '/tasks', element: <Tasks/>},
    {path: '/workers', element: <Workers/>},
    {path: '/project/:id', element: <ProjectIdPage/>},
    {path: '/project/new', element: <ProjectIdPage/>},
]