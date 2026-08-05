import React,{useState} from 'react'

function Color(){
    const [color,changeColor]=useState('#ffff')

    function handleColor(e){
        changeColor(e.target.value)
    }
    return(
        <div className='color-picker'>
            <h1>Color picker</h1>
            <div className='color-display' style={{backgroundColor:color}}>
                <p>Selected color : {color}</p>
            </div>
            <label htmlFor="">Select a Color</label>
            <input type="color" value={color} onChange={handleColor}/>
        </div>
    )
}


export default Color