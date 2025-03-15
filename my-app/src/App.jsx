import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Foods from './Foods.jsx';
import Card from './Card.jsx';
import Student from './Student.jsx';
// import State from './State.jsx';
import State from './State2.jsx';
import MyComponent from './MyComponenet.jsx';
import WindowSize from './WindowSize.jsx';
import SmartHome from './SmartHome';

function App() {

  const fruits =[{name:"apple" ,id:1},
                  {name:'orange',id:2},
                  {name:'lemon',id:3}]
  fruits.sort()

  const items= fruits.map(fruits=> <li key={fruits.id}>id: {fruits.id} {fruits.name}</li>)
  // return(<ul>{items}</ul>)
  
  return(
   <>
  
   <SmartHome/>
   
   {/* <WindowSize/> */}
   {/* <MyComponent/> */}
    {/* <ul>{items}</ul> */}
    {/* <Header> </Header> */}
    {/* <State name='usman'/> */}
   {/* <State/> */}
    {/* <Foods/> */}
    {/* <Student std /> */}
    {/* <Student name="Ali" age={25} isStudent={true}/> */}
    {/* <Card/> */}
    {/* <Footer>  </Footer> */}
    
   </>
  );
}

export default App
