import { useEffect, useState } from "react"
export const TodoForm = ({onAddTodo})=>{
     const [inputs, setInputs] = useState({});

     const handleInputChange = (value)=>{
        setInputs({ id:value, content:value, checked : false})
     }

     const handleFrom = (event)=>{
        event.preventDefault();
        onAddTodo(inputs);
        setInputs({content:""});
     }
    return(
        <form onSubmit={handleFrom}>
                <input
                    className="bg-white border-gray-600 text-black w-52 h-10 rounded-s-lg text-xl"
                    type="text"
                    value={inputs.content}
                    checked = {inputs.checked}
                    onChange={(e) => handleInputChange(e.target.value)}
                />
                <button className="bg-[#126786] w-28 h-10 border-sky-[3px] rounded-e-lg" type="submit">Add to List</button>
            </form>
    )
}