import { useState } from "react";
 
let UseStateComp = function(){
    let [power,setPower] = useState(0)
     let increasepower=()=>{
       setPower(power+1);
    }
        return <div>
            <h2>use state component</h2>
            <h1> power : {power}</h1> 
            <button onClick={increasepower}>increase power</button>            
        </div>     
}


// class UseStateComp extends Component{
//     state = {
//         power:0   
//     }
//     increasepower=()=>{
//         this.setState({
//             power:this.state.power+1
//         })
//     }
//     render(){
//         return <div>
//             <h1> power : {this.state.power}</h1> 
//             <button onClick={this.increasepower}>increase power</button>            
//         </div>
       
//     }
// }

export default UseStateComp;