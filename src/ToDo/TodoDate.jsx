import { useEffect, useState } from "react"
export const TodoDateTime =()=>{
    const [DateandTime, setDateaTime] = useState("");

    useEffect(() => {
        const Interval = setInterval(() => {
            const now = new Date();
            const formattedDate = now.toLocaleDateString();
            const formattedTime = now.toLocaleTimeString();
            setDateaTime(`${formattedDate}-${formattedTime}`);
        }, 1000)
    }, [])
    return   <h2 className="text-xl">{DateandTime}</h2>
}