import React from 'react'
import './App.css';
// import Ternury from './components/layout/Ternury'
import Switch from './components/layout/Switch'
// import Logic from './components/layout/Logic';
// import Else from './components/layout/Else';



const App = () => {
 

  const list = [
    { id: 1, name:'sheida', state : 1 },
    { id: 2, name:'jac', state : 2 },
    { id: 3, name:'sara',  state : 4},
    { id: 4, name:'christopher',  state : 5},
    { id: 5, name:'jane',  state : 3},
    { id: 6, name:'monika',  state : 5},
    { id: 7, name:'ras',  state : 2},
  ]
  
  



  
  return(
    <>
     {/* <Ternury list={list} /> */}
     {/* <Logic list={list}/> */}
     {/* <Else list={list}/> */}
     <Switch list={list}/>
     
    </>
  )
    
  
}

export default App
