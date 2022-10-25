import { useState } from "react";
 
let UseStateObjComp = function(){
    let [hero,addHeros] = useState({firstname : "", lastname : ""})
    //  let addHeroFname=()=>{
    //     addHeros({
    //         firstname : "tony",
    //         lastname:"stark"
    //     })
    // }
     let addHeroname=(evt)=>{
        addHeros({
           ...hero,
            [evt.target.name] : evt.target.value,
           
        })
    }
    
    //  let addHeroFname=(evt)=>{
    //     addHeros({
    //         ...hero,
    //         firstname : evt.target.value,
           
    //     })
    // }
    //  let addHeroLname=(evt)=>{
    //     addHeros({
    //         ...hero,
    //         lastname : evt.target.value,
           
    //     })
    // }
        return <div>
            <h2>use state object component</h2>
            <h1> firstname : {hero.firstname}</h1> 
            <h1> lastname : {hero.lastname}</h1> 
            <button onClick={addHeroname}>Add Hero</button>  <br />
            <label htmlFor="fname"> firstname:<input onChange={(evt)=>{addHeroname(evt)}} name="firstname" type="text" /> </label>  <br />        
            <label htmlFor="lname">lastname:<input onChange={(evt)=>{addHeroname(evt)}} name="lastname" type="text" /> </label>          
        </div>     
}
export default UseStateObjComp;



// import { useState } from "react";
 
// let UseStateObjComp = function(){
//     let [hero,addHeros] = useState({firstname : "", lastname : ""})
//     //  let addHeroFname=()=>{
//     //     addHeros({
//     //         firstname : "tony",
//     //         lastname:"stark"
//     //     })
//     // }
//      let addHeroFname=(evt)=>{
//         addHeros({
//             firstname : evt.target.value,
           
//         })
//     }
//      let addHeroLname=(evt)=>{
//         addHeros({
//             lastname : evt.target.value,
           
//         })
//     }
//         return <div>
//             <h2>use state object component</h2>
//             <h1> firstname : {hero.firstname}</h1> 
//             <h1> lastname : {hero.lastname}</h1> 
//             <button onClick={addHeroFname}>Add Hero</button>  <br />
//             <label htmlFor="fname"> firstname:<input onChange={(evt)=>{addHeroFname(evt)}} name="firstname" type="text" /> </label>  <br />        
//             <label htmlFor="lname">lastname:<input onChange={(evt)=>{addHeroLname(evt)}} name="lastname" type="text" /> </label>          
//         </div>     
// }
// export default UseStateObjComp;