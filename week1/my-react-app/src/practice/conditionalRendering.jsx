function ConditionalRendering(props){
    return(props.isLoggedIn?<><p>Logged in</p></>: <><p>Logged out</p></>)
}

export default ConditionalRendering