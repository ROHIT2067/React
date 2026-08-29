import React,{useState} from "react"


function TextInput(){
 const [val,setVal]=useState('')

 function Handle(e){
    setVal(e.target.value)
 }

 return (<>
        <input type="text" onChange={Handle} value={val}/>
        <p>You typed : {val}</p>
        </>)
}

export default TextInput