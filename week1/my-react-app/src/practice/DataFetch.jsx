import React,{useState,useEffect,useRef} from "react"
export function Capture(){
const [users,setUsers] = useState([]);

useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/users')
.then((res)=>res.json())
.then((data)=>{
  return setUsers(data)
})
},[]);

return(
  <div>
    {
    
      users.map((user)=>(
        <div key={user.id}>{user.email},{user.name}</div>
      ))
    }
  </div>
)
};

export default Capture