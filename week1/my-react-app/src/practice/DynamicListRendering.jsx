function DynamicListRendering(){
    const fruits=['apple','banana','cherry']
    const list=fruits.map(fruit=>
        <li>{fruit}</li>)
    return (<><ul>{list}</ul></>)
}
export default DynamicListRendering