import React, {use, useState} from 'react'

function Div(){

    const [color,setColor]=useState('red')

    // const handleColor=(e)=>setColor('black')
    const handleColor=(e)=>setColor((p)=>p==='red'?'black':'red')
    return <>
    <div style={{width: 100, height:100,backgroundColor:color}}>
        <button onClick={handleColor}>Color change</button>
    </div>
    </>
}

export default Div