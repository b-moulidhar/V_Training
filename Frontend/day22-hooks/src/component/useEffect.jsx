import { useEffect } from "react";

let UseEffectComp = (props)=> {
    let power = props.state.power;
    let version = props.state.version;
    let  rating= props.state.rating;

    // useEffect(()=>{
    //     console.log("component mounted");
    // },[]);

    // useEffect(()=>{
    //     console.log("component updated");
    // },[power]);

    // useEffect(()=>{
    //     return ()=>{
    //     console.log("component unmounted");
    //     }
    // },[]);

    useEffect(()=>{
            console.log("component mounted or updated");
            return ()=>{
                console.log("component unmounted");
            }
        },[power]);

    return <div>
                <h2>UseEffect Hook</h2>
                <h3>Power is : { power }</h3>
                <h3>Version is : { version }</h3>
                <h3>Rating is : { rating }</h3>
            </div>
}
export { UseEffectComp };