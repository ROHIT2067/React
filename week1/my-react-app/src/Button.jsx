function Button(){
    let count=0
    const handleClick=(e)=>e.target.textContent="aaaaaa😢"
    // const handleClick2=(name)=>console.log(`${name} stop touching me`)
    return(<><button onDoubleClick={(e)=>handleClick(e)}>Click me🧌</button></>)
}

export default Button