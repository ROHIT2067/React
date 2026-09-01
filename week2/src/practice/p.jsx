import { memo, useCallback, useMemo, useState } from "react"

function Slow(n){
    for(let i=0;i<100000;i++){}
    return n*n
}

const Display=memo(function Display({rslt}){
    console.log("Display rendered")
    return <h2>{rslt}</h2>
})

export default function Memo(){
    const [num,setNum]=useState(2)
    const [unrelated,setUnrelated]=useState(0)

    const square=useMemo(()=>Slow(num),[num])
    const handle=useCallback(()=>setUnrelated((u)=>u+1),[])

    return <>   
           <input type="number" value={num} onChange={(e)=>setNum(e.target.value)}/>
           <Display rslt={square}/>
           <button onClick={handle}>unrelated renders : ({unrelated})</button>
           </>
}