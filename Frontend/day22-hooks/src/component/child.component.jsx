import { useContext } from "react";
import FamilyContext from "../contexts/family.context";

let ChildComp =()=>{
    let context = useContext(FamilyContext)
    return <div style={{border:"2px solid", margin:"10px", padding:"10px"}}>
            <h1> Child component</h1>
           <h2>{context}</h2>
           <h2>{context}</h2>
           <h2>{context}</h2>
           <h2>{context}</h2>
    </div>
}

export default ChildComp;