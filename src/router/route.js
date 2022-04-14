import { ProjectIdPage } from "../components/Projects/ProjectIdPage";
import Projects from "../components/Projects/Projects";
import Tasks from "../components/Tasks/Tasks";
import Employees from "../components/Employees/Employees";
import { EmployeeIdPage } from "../components/Employees/EmployeeIdPage";
import { TaskIdPage } from "../components/Tasks/TaskIdPage";


export const routes = [
    {path: '/', element: <Projects/>},
    {path: '/projects', element: <Projects/>},
    {path: '/tasks', element: <Tasks/>},
    {path: '/employees', element: <Employees/>},
    {path: '/employee/:id', element: <EmployeeIdPage/>},
    {path: '/employee/new', element: <EmployeeIdPage/>},
    {path: '/project/:id', element: <ProjectIdPage/>},
    {path: '/project/new', element: <ProjectIdPage/>},
    {path: '/task/new', element: <TaskIdPage/>},
    {path: '/task/:id', element: <TaskIdPage/>},
]