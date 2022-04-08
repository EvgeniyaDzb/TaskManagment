import React, { useState } from "react"
import { IEmployee, employeeInitialState } from "../Types/employee"
import { Input } from "../UI/input/Input"



export const EmployeeIdPage: React.FC = () => {
    const [employee, setEmployee] = useState<IEmployee>(employeeInitialState)

    return(<form>
        <Input
        value= {employee.name}
        type = 'text'
        placeholder= ''
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmployee({ ...employee, name: e.target.value })}
        />

    </form>)

}