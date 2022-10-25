
let FunComp = function(props){
    console.log("fun component rendered",Math.random());
    return <div class="container">
           <h2>power : { props.power }</h2>
           <h2>version :{props.version }</h2>
    </div>
}

export default FunComp;