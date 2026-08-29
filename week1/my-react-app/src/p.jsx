import React,{useState,useRef,useEffect} from "react";

function Practice(props){
    if(props.isloggedIn===true)return <><h2>You are logged in</h2></>

    return <><h2>Please log in</h2></>

}

export default Practice