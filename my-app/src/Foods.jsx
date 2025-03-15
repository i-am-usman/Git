let food1="Cherry";
let food2="Banana";
function Foods(){

    
    return(
        <ul>
            <li>Apple</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}

export default Foods;