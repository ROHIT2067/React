import React,{useReducer} from "react";

function reducer(state,action){
    switch(action.type){
        case 'inc':return{count:state.count+1}
        case 'dec':return{count:state.count-1}
        case 'reset':return{count:0}
        default : throw new Error('Unknown action : '+action.type)
    }
}

export default function CounterReducer(){
    const [state,dispatch]=useReducer(reducer,{count:0})
    return <>   
            <p>{state.count}</p>
            <button onClick={()=>dispatch({type:'inc'})}> Add </button>
            <button onClick={()=>dispatch({type:'dec'})}> Sub </button>
            <button onClick={()=>dispatch({type:'reset'})}> Reset </button>
            </>
}