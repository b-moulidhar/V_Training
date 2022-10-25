import { Component } from "react";
import UseStateComp from "./component/useState.component";
import UseStateAssignmentComp from "./component/useStateAssignment";
import UseStateObjComp from "./component/useStateObject.component";
 
class App extends Component{
    state = {
        title : "Hooks"    
    }
    render(){
        return <div>
            <h1>{this.state.title}</h1> 
            {/* <h2><UseStateComp/></h2>            
            <h2><UseStateObjComp/> </h2>             */}
            <h2><UseStateAssignmentComp/> </h2>
        </div>
       
    }
}

export default App;