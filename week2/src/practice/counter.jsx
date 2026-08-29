import { createContext, useContext, useState } from "react";

const counterContext=createContext()

export function CounterProvider({children}){
  const [count,setCount]=useState(0)

  return (
    <>
      <counterContext.Provider value={{count,setCount}}>
        {children}
      </counterContext.Provider>
    </>
  )
}

export function Counter(){
  const {count,setCount}=useContext(counterContext)

  return <>
        <p>{count}</p>
        <button onClick={()=>setCount(c=>c+1)}>add</button>
        <button onClick={()=>setCount(c=>c-1)}>sub</button>
        <button onClick={()=>setCount(c=>0)}>reset</button>
        </>
}