import React,{useState,useEffect,useRef, use} from 'react'

function StopWatch(){
    const [isRunning,setRunning]=useState(false)
    const [elapsedTime,setElapsedTime]=useState(0)
    const intervalId=useRef(null)
    const startTimeRef=useRef(0)

    useEffect(()=>{
        if(isRunning){
            intervalId.current=setInterval(()=>{
                setElapsedTime(Date.now()-startTimeRef.current)
            },10)
        }
        return()=>{
        clearInterval(intervalId.current)
    }
    },[isRunning])

    


    function start(){
        if(isRunning)return
        setRunning(true)
        startTimeRef.current=Date.now()-elapsedTime
    }
    function stop(){
        setRunning(false)
    }
    function reset(){
        clearInterval(intervalId.current);
        setElapsedTime(0)
        setRunning(false)
    }
    function format() {
    let hr = Math.floor(elapsedTime / (1000 * 60 * 60));
    let min = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let sec = Math.floor((elapsedTime / 1000) % 60);
    let msec = Math.floor((elapsedTime % 1000) / 10);

    hr = String(hr).padStart(2, "0");
    min = String(min).padStart(2, "0");
    sec = String(sec).padStart(2, "0");
    msec = String(msec).padStart(2, "0");

    return `${hr}:${min}:${sec}:${msec}`;
}
    return(<>
    <div className='stopWatch'>
        <div className='display'>
            {format()}
        </div>
        <div className='controls'>
            <button className='start' onClick={start}>Start</button>
            <button onClick={reset} className='reset'>Reset</button>
            <button onClick={stop} className='stop'>Stop</button>
        </div>

    </div>
            </>)
}
export default StopWatch