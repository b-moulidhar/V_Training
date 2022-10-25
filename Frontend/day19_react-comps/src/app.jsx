import { Component } from "react";
import ChildComp from "./child.component";
import ChildPureComp from "./child.pure.component";
import FunComp from "./function.component";
import MemoComp from "./memo.component"
class App extends Component{
    state={
        title:"default title",
        power:0,
        version:0
       }
       increasePower=()=>{
        this.setState({
            power:this.state.power+1
        })
       }
       setVersion=()=>{
        this.setState({
            version:100
        })
       }
    
    render(){
        return <div>
            <button onClick={this.increasePower}>increase</button>
               <br />
               <button onClick={this.setVersion}>setVersionto100</button>
            <ChildComp version={this.state.version}  power={this.state.power}></ChildComp>
            <ChildPureComp version={this.state.version}  power={this.state.power}></ChildPureComp>
            <FunComp version={this.state.version}  power={this.state.power}></FunComp>
            <MemoComp version={this.state.version}  power={this.state.power}></MemoComp>
        </div>
    }
}

export default App;