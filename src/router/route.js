import { ProjectIdPage } from "../components/Projects/ProjectIdPage";
import Projects from "../components/Projects/Projects";
import Tasks from "../components/Tasks/Tasks";
import Employees from "../components/Employees/Employees";


export const routes = [
    {path: '/', element: <Projects/>},
    {path: '/projects', element: <Projects/>},
    {path: '/tasks', element: <Tasks/>},
    {path: '/employees', element: <Employees/>},
    {path: '/project/:id', element: <ProjectIdPage/>},
    {path: '/project/new', element: <ProjectIdPage/>},
]