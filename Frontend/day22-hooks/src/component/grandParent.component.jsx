import { useState } from "react";
import FamilyContext from "../contexts/family.context";
import CousinComp from "./cousin.component";
import ParentComp from "./parent.component";

let GrandParentComp =()=>{
    let [gift,updateGift] = useState(0);
    return <div style={{border:"2px solid", margin:"10px", padding:"10px"}}>
            <h1>Grand parent component</h1>
            <button onClick={()=>{updateGift(Math.round(Math.random()*10000))}}>Send gift</button>
            <FamilyContext.Provider value={gift}>
            <ParentComp/>
            <CousinComp/>
            </FamilyContext.Provider>
    </div>
}

export default GrandParentComp;