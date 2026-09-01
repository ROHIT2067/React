import {Counter, CounterProvider} from "./practice/counter"
import { TimerProvider, Timmer } from "./practice/timer"
import CounterReducer from "./practice/counterUsinguseReducer"
import { lazy, Suspense } from "react";
import CounterReducerr from "./practice/counterUsinguseReducer";
const HeavyComponent=lazy(()=>import('./practice/heavy'))
import Memo from "./practice/useMemoExample";
import { LayOut, Home, About } from "./practice/outlet";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mem from "./practice/p";


function Hello(){
    console.log("HELLO")
}
function App(){
  return (<> 
  {/* <CounterProvider>
     <Counter/>
  </CounterProvider> */}
       {/* <TimerProvider>
        <Timmer/>
       </TimerProvider> */}
       {/* <CounterReducer/> */}
         {/* <Suspense fallback={<p>loading...</p>}>        
            <HeavyComponent/>
        </Suspense> */}
        {/* <Memo/> */}
        <Mem/>


              {/* Outlet example */}
               {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter> */}
        </>)
}

export default App