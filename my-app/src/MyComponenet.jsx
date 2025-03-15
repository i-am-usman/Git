import React, {useState,useEffect} from 'react';

function MyComponent(){

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() =>{
        document.title = `Count: ${count}`;
        console.log("REndering")
    },[name,age,count]);

    


     const nameSetter = () =>{
        setName("Usman!");
        document.title=`${name}`;
    }
    
    const ageSetter = () =>{
        setAge(prev => prev+1);
    }

    const counter = ()=>{
        setCount(prev =>prev+1)
    }

    const decreaseCounter = () =>{
        setCount(prev => prev -1)
    }

    function nameGetter(event){
        setName(event.target.value)
    }
    return(
        <>
        <div>        
        <input value={name} onChange={nameGetter}/>
        Name: {name}
        </div>
        <button onClick={nameSetter}>Set Name</button>
        <div>Age: {age}</div>
        <button onClick={ageSetter}>Increment Age</button>
        <div>Count: {count}</div>
        <div>
        <button onClick={counter}> Increment Count</button>
        <button onClick={decreaseCounter}> Decrease Count</button>
        </div>


        </>
    )
}

export default MyComponent;