import React,{useState} from "react"

function MyComp(){

    const [name,setName]=useState("kaapi")
    const [age,setAge]=useState(19)
    const [status,setStatus]=useState(false)
    const updateName=()=>{
        setName("thambi")
    }
    const updateAge=()=>{
        setAge(age+1)
    }
    const updateStatus=()=>{
        setStatus(!status)
    }
    return (
        <div>
            <p>Name:{name}</p>
            <button onClick={updateName}>Set Name</button>
            <p>Age:{age}</p>
            <button onClick={updateAge}>+ Age</button>
            <p>Status:{status?"YES" : "NO"}</p>
            <button onClick={()=>updateStatus(true)}>Change Status</button>
        </div>
    )
}

export default MyComp