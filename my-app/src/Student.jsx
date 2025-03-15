
function Student(props){

    if(props.isStudent){
        return(
            <div className="student"> 
                <p>Name: {props.name}</p>
                <p>Age: {props.age}</p>
                <p> Stduent: {props.isStudent ? 'Yes' : "No"}</p>
            
             </div>
            
        );
    }

    else{
        return <>
            <h1>Hy</h1>
        </>
    }
   
}

export default Student;