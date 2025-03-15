import React, {useState,useEffect} from 'react';

function WindowSize(){
    
    const [width,setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    // window.addEventListener("resize",handleResize);

    useEffect(() =>{
        window.addEventListener("resize",handleResize);

        console.log("Event Listener Added");

        return() =>{
            window.removeEventListener("resize",handleResize);
            console.log("event listener removed");
        }
    },[]);

    useEffect (()=>{
        document.title=`Resizing window: ${width} x ${height}`;
    })

    function handleResize(){
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
   
    }


    return(<>
        <h1>Window Width: {width}</h1>
        <h1>Window Height: {height}</h1>
        </>
        
    );
};

export default WindowSize;