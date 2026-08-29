import React,{useState} from 'react'

function Coun(){
    const [num,setNum]=useState(0)

    function Increment(){
        setNum(n=>n+1)
    }
    function Decrement(){
        setNum(n=>n-1)
    }
    function Zero(){
        setNum(0)
    }
    return(<>
            <h2>{num}</h2>
            <button onClick={Increment}> + </button>
            <button onClick={Decrement}> - </button>
            <button onClick={Zero}> Reset </button>
            </>)
}

export default Coun