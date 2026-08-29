import TodoList from './TodoList'
import P from './p'

function App(){
  function handle(data){
    console.log(data)
  }
  return (
    <>
    {/* <TodoList/> */}
    <P isloggedIn={true}/>
    <P isloggedIn={true}/>
    </>
  )
}

export default App