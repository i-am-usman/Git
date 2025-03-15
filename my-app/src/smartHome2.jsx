import React,{useState,useEffect} from "react";


function smartHome2(){
    const [mode,setMode]=useState("")
     const[l,setL]=useState("")
    const[temp,setTemp]=useState("")
    const[tv,setTV]=useState("")
    const[fan,setFan]=useState("")
    const[door,setDoor]=useState("")
    const[home,setHome]=useState("")
    const[clickButton, setclickButton] =useState(false)

    useEffect(()=>{
        if(!clickButton){
            setHome("Enter Home")
        setMode("Away")
        setL("Off")
        setTemp("28.2")
        setTV("off")
        setFan("OFF")
        setDoor("Lock")

        }
        if(clickButton){
        setHome("Exit Home")
        setMode("Home")
        setL("On")
        setTemp("22.2")
        setTV("on")
        // setFan("on")
        setDoor("Unlock")
        console.log("hy");
        }
        
    },[home]);


    function clickHandler(){
        setHome("Home")
       clickButton?setclickButton(false): setclickButton(true)
        console.log(clickButton);
        
    }

    let fanHandler=()=>{
        fan=="OFF"?setFan("ON"):setFan("OFF")
        
    }

    return(
        <>
            <div>
                <h1>Mode {mode}</h1>
                <h2>Lights {l}</h2>
                <h2>Temperature {temp}</h2>
                <h2>TV {tv}</h2>
                <h2>Fan {fan}</h2><button onClick={fanHandler} >{fan=="OFF"?"Start":"Stop"}Fan</button>
                <p>Door {door}</p>
                <button onClick={()=>clickHandler()}> {home}  </button>

            </div>
        
        </>


    );
}

export default smartHome2;