import React,{useState,useEffect} from 'react'

function MyComponent(){
    const [count,setCount]=useState(0)

    useEffect(()=>{
        document.title=` Count is ${count}`
    })

    function addCount(){
        setCount(c=>c+1)
    }

    function sub(){
        setCount(c=>c-1)
    }
    return(<>
    <p>Count : {count}</p>
    <button onClick={addCount}>Add</button>
    <button onClick={sub}>Subtract</button>
    </>)
}
export default MyComponent