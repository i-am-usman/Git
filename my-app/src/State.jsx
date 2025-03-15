
import {useState} from "react";

function State(){

    const [count,setCount]=useState({name:"usman", id:2,age:23})
    function CountHandler(){
        setCount(prev=>({
            ...prev,
            id:prev.id+1,
            name:"beta",
           
        }))
    }
    return (
        <>
        <div className="state">HEllo</div>
        <h1>{count.id}</h1>
        <h1>{count.name}   {count.id}   Welcome</h1>
        <button onClick={()=>CountHandler()}>add</button>
        </>
    )
}




    export default State;

