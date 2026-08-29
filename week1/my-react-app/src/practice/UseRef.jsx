import React, {useRef} from 'react'

function UseRef(){
    const inputRef=useRef(null)

    const handleClick=()=>{
        inputRef.current.focus()
    }
    return (
        <>
        <input type="text" ref={inputRef} />
        <button onClick={handleClick}>Focus on the input</button>
        </>
    )
}

export default UseRef

// useRef is used here to get a direct reference to the input DOM element