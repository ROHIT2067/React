import React,{useEffect,useState} from "react"

function Timer(){
    const [seconds,setSeconds]=useState(0)

    useEffect(()=>{
        console.log('Mounted or seconds Changed : ',seconds)

        const intervalId=setInterval(()=>{
            setSeconds(prev=>prev+1)
        },1000)

        return ()=>{
            console.log('cleanUp before next effect or unMount')
            clearInterval(intervalId)
        }
    },[])
    return <p>Seconds : {seconds}</p>
}
export default Timer