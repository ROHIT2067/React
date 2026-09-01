import { createContext, useContext, useRef, useState } from "react";

const timerContext=createContext()

export function TimerProvider({children}){
    const [sec,setSec]=useState(0)
    const id=useRef(null)
    const isRun=useRef(false)

    const start=()=>{
        if(isRun.current)return
        isRun.current=true
        id.current=setInterval(()=>{
            setSec((c)=>c+1)
        },1000)
    }
    const stop=()=>{
        isRun.current=false
        clearInterval(id.current)
    }
    const reset=()=>{
        isRun.current=false
        clearInterval(id.current)
        setSec(0)
    }
    return <>
    <timerContext.Provider value={{sec,start,stop,reset}}> 
    {children}
    </timerContext.Provider>
    </>
}

export function Timmer(){
    const {sec, start,stop,reset}=useContext(timerContext)

    return   <>       
            <h1>{sec}</h1>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
            </>
}