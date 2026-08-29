import React, {useState} from 'react'

function Name(){
    const [name,setName]=useState('guest')

    const handleChange=(e)=>setName(e.target.value)

    return <>
            <input type="text" value={name} onChange={handleChange}/>
            <p>You typed : {name}</p>
            </>
}

export default Name