function ParentToChild(props){
    let items=props.arr.map(fruit=><><li>{fruit}</li></>)
    return <ul>{items}</ul>
}
export default ParentToChild