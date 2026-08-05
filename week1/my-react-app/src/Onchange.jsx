import React,{useState} from 'react'


function onChange(){
    const [name,setName]=useState('')
    const [quantity,setQuantity]=useState(0)
    const [comment,setComment]=useState('')

    function handleName(e){
        setName(e.target.value)
    }

    function handle(e){
        setQuantity(e.target.value)
    }

    function handleComment(e){
        setComment(e.target.value)
    }
    return (<>
    <div>
        <input type="text" value={name} onChange={handleName}/>
        <p>Name : {name}</p>
        <input type="number" value={quantity} onChange={handle}/>
        <p>Quantity : {quantity}</p>
        <input type="text" value={comment} onChange={handleComment} placeholder='Comment chey punde'/>
        <p>Comment : {comment}</p>
    </div>
            </>)
}

export default onChange