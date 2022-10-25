import React from "react"
let MemoComp = function(props){
    console.log("Memo fun component rendered",Math.random());
    return <div class="container">
           <h2>power : { props.power }</h2>
           <h2>version : { props.version }</h2>
    </div>
}

export default React.memo(MemoComp);
