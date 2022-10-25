import { useState } from "react"
import GrandParentComp from "./component/grandParent.component";
import { UseEffectComp } from "./component/useEffect";
import { UseReducerComp } from "./component/useReducer";

let App = ()=>{
    let [state,setState] = useState({power:0, version:0, rating:0});
    let msg = useHook(1);
    return <div>
        <h1>{msg} | power : {state.power} | version : {state.version} | rating : {state.rating}</h1>
        power <input type="range" onChange={(evt)=>{ setState({...state, power :evt.target.value }) }}/> <br />
        version <input type="range" onChange={(evt)=>{ setState({...state, version : evt.target.value}) }}/> <br />
        rating <input type="range" onChange={(evt)=>{ setState({...state, rating : evt.target.value}) }}/>
        { state.power < 50 ? <UseEffectComp state={state}/>:  <h3>power greater than 50</h3> }
        <hr />
        <UseReducerComp/>
        <hr />
        <GrandParentComp/>
    </div>
}
export default App;