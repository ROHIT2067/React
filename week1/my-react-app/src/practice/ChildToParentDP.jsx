function ChildToParent({ sendData }) {
  const fruits = ["apple", "banana", "orange"];

  return (
    <>
      <button onClick={() => sendData(fruits)}>
        Send Fruits to Parent
      </button>
    </>
  );
}

function CtoP({sendData}){
    const f=['apple','bananana']
    return (
        <>
        <button onClick={()=>sendData(fruits)}>Send Fruits to Parent</button>
        </>
    )
}

function handleData(data){
console.log(data)
}
return <><child senData={handleData}/></>
export default ChildToParent;