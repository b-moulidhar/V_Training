import { useRef } from "react";
import { useReducer } from "react";

let UseReducerComp = ()=> {
    let fname = useRef();
    let lname = useRef();
    let cname = useRef();
    let reducerFun=(state,action)=>{
       
        switch(action.type){
            case "UPDATE_FNAME":return {...state, firstname : action.payload}
            case "UPDATE_LNAME":return {...state, lastname : action.payload}
            case "UPDATE_CITY":return {...state, city : action.payload}
            default : return state
    
    }

    }
    let [state,dispatch] = useReducer(reducerFun,{firstname:'', lastname:"", city:'' })
    return <div>
                <h2>UseReducer Hook</h2>
                <h3>firstname is : { state.firstname }</h3>
                <h3>lastname is : { state.lastname }</h3>
                <h3>city is : { state.city }</h3>
                <input ref={fname} type="text" /> 
                <button onClick={()=> dispatch({type:"UPDATE_FNAME",payload : fname.current.value})}>add first name</button> <br />
                <input ref={lname} type="text" />
                <button onClick={()=> dispatch({type:"UPDATE_LNAME",payload : lname.current.value})}>add last name</button> <br />
                <input ref={cname} type="text" />
                <button onClick={()=> dispatch({type:"UPDATE_CITY",payload :cname.current.value})}>add city</button> <br />
            </div>
}
export { UseReducerComp };