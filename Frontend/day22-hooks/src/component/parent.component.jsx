import ChildComp from "./child.component";

let ParentComp =()=>{
    return <div style={{border:"2px solid", margin:"10px", padding:"10px"}}>
            <h1> parent component</h1>
            <ChildComp/>
    </div>
}

export default ParentComp;