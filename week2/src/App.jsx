import {Counter, CounterProvider} from "./practice/counter"

function App(){
  return (<> 
  <CounterProvider>
     <Counter/>
  </CounterProvider>
       
        </>)
}

export default App