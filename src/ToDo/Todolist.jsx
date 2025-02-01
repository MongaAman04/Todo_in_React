import { FaRegCheckCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import "./todo.css"
import { useEffect, useState } from "react";
export const Todolist =({data,handleDelete,handleCheck,checked})=>{
   const [date,SetDate] = useState("");

    useEffect(()=>{
        const now = new Date();
        const CurrentDate = now.toLocaleDateString();
        SetDate(`${CurrentDate}`);
    })
   
    const handleListDelete =(list)=>{
        handleDelete(list)
    }
    const handleChecklist = (task)=>{
       handleCheck(task); 
    
    }
    return(
        <li className="min-w-80 h-10 bg-white text-black rounded-lg flex gap-2 justify-between items-center text-xl" style={{margin:"20px"}}>
        <span className={checked ? "isChecked" :"NoChecked"}>{data}</span>
        <span className="flex gap-6">
        <h2 className={checked?"dateNoCheck":"dateCheck"}>{date}</h2>
        <button className="text-2xl" onClick={()=>handleChecklist(data)}><FaRegCheckCircle/></button>
        <button className="text-2xl" onClick={()=> handleListDelete(data)}><MdDelete/></button>
        </span>
    </li>
    )
}