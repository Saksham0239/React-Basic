import React,{useState} from 'react';
import Input from'./Components/UserInput'
import Output from './Components/UserOutput'
import './App.css';


function App() {

  let [state,setState]=useState(
     {
       username:"Saksham Pratap Singh"
     }
  );

  function nameStateHandler(event)
  {
    setState(
      {
        username:event.target.value
      }
    )
  }
  return (
    <div className="App">
      <h1>This is a React Application!</h1>
      <Input handler={nameStateHandler} para1={state.username}/>
      <Output para1={state.username}  />
    </div>
  );
}

export default App;
