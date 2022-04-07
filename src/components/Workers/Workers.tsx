import React, { useEffect, useState } from "react";
import Service from "../../API/Service";
import { IWorker } from "../Types/workers";
import { WorkerItem } from "./WorkerItem";

const Workers: React.FC = () => {
    const [workers, setWorkers] = useState<IWorker[]>([])

    useEffect(()=>{
        Service.getAllWorkers().then(responce => {
            setWorkers([...workers, ...responce])
        })
    },[])

    const removeWorker = (id:number):void => {
        setWorkers(workers.filter(worker => worker.id !==id));
         Service.deleteWorker(id);
    }

    return(
        <div>
            {workers.map((item) => {
              return  <WorkerItem key={item.id} worker={item} removeWorker={removeWorker} />
            })}
        </div>
    )
}

export default Workers;