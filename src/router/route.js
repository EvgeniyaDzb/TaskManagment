import { ProjectIdPage } from "../components/Projects/ProjectIdPage";
import Projects from "../components/Projects/Projects";
import Tasks from "../components/Tasks/Tasks";
import Workers from "../components/Workers/Workers";


export const routes = [
  //  {path: '/', element: <Projects/>},
    {path: '/projects', element: <Projects/>, value: "Projects"},
    {path: '/tasks', element: <Tasks/>, value: "Tasks"},
    {path: '/workers', element: <Workers/>, value: "Workers"},
    {path: '/project/:id', element: <ProjectIdPage/>},
]