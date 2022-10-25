import { Component } from "react";
import ChildComp from "./components/childComp";


class App extends Component{
    state={
        power:0
    }
    increasePower=()=>{
        this.setState({
            power:this.state.power +1
        })
    }
    render(){
        return <div>
            <button onClick={this.increasePower}>increase power</button>
           <ChildComp {...this.state}/>
        </div>
    }
};

export default App;