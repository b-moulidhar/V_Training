import FamilyContext from "../contexts/family.context";

let CousinComp =()=>{
    return <div style={{border:"2px solid", margin:"10px", padding:"10px"}}>
            <h1> Cousin component</h1>
            <FamilyContext.Consumer>
                {(val)=><h2>gift amount:{val}</h2> }
            </FamilyContext.Consumer>
    </div>
}

export default CousinComp;