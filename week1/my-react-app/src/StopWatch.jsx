import React, { useState, useEffect, useRef, use } from "react";

function StopWatch() {
  const [sec,setSec]=useState(0)
      const id=useRef(null)
      const isRun=useRef(false)
  
      const start=()=>{
           if (isRun.current === true) return;
          isRun.current = true;
  
          id.current=setInterval(()=>{
          
              setSec(p=>p+1)
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
  
      return (<> 
              <h2>Sec : {sec}</h2>
              <button onClick={start}>Start</button>
              <button onClick={reset}>Reset</button>
              <button onClick={stop}>Stop</button>
              </>)
}
export default StopWatch;
