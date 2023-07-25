import { useState, useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import formReducer from './assets/reducer/formReducer';

const initialState ={
  First: "",
  LastName: "",
  email:"",
  password:"",
}

function App() {
  const [state, dispatch] = useReducer
  (formReducer,initialState)
  const [text, setText] = useState(1)
  

  function changeFirstName(e){
    dispatch({type:'CHANGE_FIRST', payload:e.target.value})

  }
  function changeLastName(e){
    dispatch({type:'CHANGE_LAST', payload:e.target.value})
  }

  function changeEmail(){
    dispatch({ type: 'CHANGE_EMAIL' ,payload:e.target.value });
  }
  function changePassword(){
    dispatch({ type: 'CHANGE_PASSWORD', payload:e.target.value });
  }

  function clickNext(){
    setText(Text + 1)

  }
  return (
    <>
   <div>
    <form>
      {text === 1 && (
        <div>
  <label>first name</label>
  <input onInput={changeFirstName} value={state.firstName}/>
</div>
      )}
{
  text === 1 && (
<div>
  <label>first name</label>
  <input onInput={changeLastName} value={state.lastName}/>
</div>
    )}
    {
      text === 2 &&(
<div>
  <label>last name</label>
  <input onInput={changeEmail}value={state.email}/>
</div>
    )}
    
      {
        
        text === 2 &&(
          <div>
          <label>password</label>
          <input type='password' onInput={changePassword}value={state.password}/>
        </div>
        )}
    </form>
    
   {text === 1 && <button onClick= {clickNext}>next</button>} 
   {text === 1 && <button onClick= {clickNext}>next</button>} 
{text ===3 && (
  <div>
  <p>{state.first}</p>
  <p>{state.last}</p>
  <p>{state.email}</p>
  <p>{state.password}</p>
 </div>
)}
 
   </div>
    </>
  )
  } 

export default App
