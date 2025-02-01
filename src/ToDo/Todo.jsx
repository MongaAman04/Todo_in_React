import { useEffect, useState } from "react"
import { TodoForm } from "./TodoForm";
import { Todolist } from "./Todolist";
import { TodoDateTime } from "./TodoDate";
import "./todo.css"
import { GetDataFromLocalStorage, SetDataAtLocalStorage } from "./TodoLocalStorage";

export const Todo = () => {
    // Get dayta from local storage
    const [task, setTasks] = useState(()=> GetDataFromLocalStorage());

    //handle fomr submission
    const handleForm = (inputValue) => {
        const {id,content,checked} = inputValue;

        //checks if input field is empty or not
        if (!content) return;

        // checks the value is repating of or not
        const isTodoRepeating = task.find((currTask)=> currTask.content === content);

        if(isTodoRepeating) return;
    
        setTasks((prev) => [...prev, {id,content,checked}]);
    }

    //set data to local storage
    SetDataAtLocalStorage(task);
    
    //Todo Data delete
    const handleDelete = (value) => {
        console.log(value);
        const updatedValue = task.filter((cur) => cur.content !== value);
        setTasks(updatedValue);

    }
    const handleAllDelete = () => {
        setTasks([]);
    }
    //Handles the check list

    const handleCheckTodo = (value)=>{ 
        const updatedTask = task.map((currTask)=>{
            if (currTask.content === value) {
                return {...currTask,checked: !currTask.checked}
            }else{
                return currTask
            }
        })
        setTasks(updatedTask);
    }
    return (
        <section className="container flex justify-center items-center flex-col gap-5">
            <h1 className="text-3xl">Todo list</h1>
            <TodoDateTime/>
            <TodoForm onAddTodo={handleForm} />
            <div>
                <ul>
                    {
                        task.map((currEle) => {
                            return (
                                <Todolist  
                                key={currEle.id} 
                                data={currEle.content} 
                                checked = {currEle.checked}
                                handleDelete={handleDelete}
                                handleCheck = {handleCheckTodo}
                                />
                            )
                        })
                    }
                </ul>
            </div>
            <button className="bg-red-600 w-20 h-12 rounded-2xl hover:bg-red-700" onClick={handleAllDelete}>Clear All</button>
        </section>
    )
}