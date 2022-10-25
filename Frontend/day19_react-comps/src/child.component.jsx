import { Component} from "react";


class ChildComp extends Component{
   
    render(){
        console.log("component rendered",Math.random());
        return <div class="container">
               <h2>power : { this.props.power }</h2>
               <h2>version : { this.props.version }</h2>
        </div>
    }
}

export default ChildComp;