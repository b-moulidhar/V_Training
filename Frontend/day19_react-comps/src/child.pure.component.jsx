import { PureComponent } from "react";
import { Component} from "react";


class ChildPureComp extends PureComponent{
    render(){
        console.log("pure component rendered",Math.random());
        return <div class="container">
               <h2>power : { this.props.power }</h2>
               <h2>version : { this.props.version }</h2>
        </div>
    }
}

export default ChildPureComp;