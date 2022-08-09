import React,{useState} from 'react'

function UseStateBasic(){
const [ title, setTitle] = useState("hello world")

const handleTitle=()=>{
  if(title==="hello world"){
    setTitle("hello usa")
  }else{
    setTitle("hello world")
  }
}
  return(
    <>
     <h1 className="App">{title}</h1> 
     <button type="button" onClick={handleTitle}>change title</button>
    </>
  )
}

export default UseStateBasic
