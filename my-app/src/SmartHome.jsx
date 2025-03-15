import React, {useEffect,useState} from 'react';


function SmartHome(){

    const [enter,setEntry] = useState('');
    const [lights , setLights] = useState('');
    const [temp, setTemp ] =useState();
    const [fan, setFan] =  useState('off');
    const [buttonText, setButtonText] = useState("Enter Home");
    const [clickedButton, setClick] = useState(false);

    useEffect(() =>{
        if(!clickedButton){
            setEntry("Away Mode!");
            setLights("off");
            setTemp(33.5)
            setFan("off")
            console.log("!Clicked")
        }
        if(clickedButton){
            setEntry("Home Mode");
            setLights("On");
            setTemp(22);
            setFan("on");
            console.log(" clicked")
        }
    },[enter]);
   

    

    function clickHandler(){
        setEntry("Home !Mode")
       clickedButton? setClick(false): setClick(true);
       console.log(clicked);
               
    }

    return(<>
    <div>
        <h1>Smart House</h1>
        <h2>Status: {enter}</h2>
        <h3>Lights:{lights}</h3>
        <h3>Temperature: {temp}</h3>
        <h3>Fan: {fan}</h3>
        <button  onClick={()=> clickHandler()}>{buttonText}</button>

    </div>

    
    
    </>)
}

export default SmartHome;
