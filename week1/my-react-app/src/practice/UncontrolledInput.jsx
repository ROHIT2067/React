import { useRef } from "react";


function UncontrolledInput(){
    const nameRef=useRef(null)

    const handleSubmit=()=>{
        console.log(nameRef.current.value)
    }

    return (
        <>
        <input type="text" ref={nameRef} />
        <button onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default UncontrolledInput

//accessing uncontrolled input via useRef