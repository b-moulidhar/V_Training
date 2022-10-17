import { useParams } from "react-router-dom"
import {BrowserRouter,Routes,Route,NavLink,Link} from "react-router-dom";
import App from "./app";
import data from "./datas/heroes data.json"
let DetailsComp = ()=>{
    let prms = useParams();
    return <div> 
    
        <h1>Details </h1>
        <h2>
        <Link to="/"  >Home</Link>
        </h2>
        {
            data.heroes.map((val,idx)=>{
                if(val.id == prms.id){
                    return <div>
                            <ul>
                            <h3>
                            <h1>Name : {val.name} <br /></h1>
                            <h2>Power Stats</h2>
                            combat power : {val.powerstats.combat} <br />
                            intelligence power : {val.powerstats.intelligence} <br />
                            durability power : {val.powerstats.durability} <br />
                            power : {val.powerstats.power} <br />
                            speed : {val.powerstats.speed} <br />
                            strength : {val.powerstats.strength} <br />
                            <h2>Biography</h2>
                            full-name : {val.biography["full-name"]} <br />
                            place-of-birth : {val.biography["place-of-birth"]} <br />
                            publisher: {val.biography.publisher} <br />
                            release-date: {val.biography["release-date"]} <br />
                            earning : {val.biography.earning} <br />
                            budget : {val.biography.budget} <br />
                            <h2>Appearance</h2>
                            gender : {val.appearance.gender} <br />
                            race : {val.appearance.race} <br />
                            height : {val.appearance.height[1]} <br />
                            weight : {val.appearance.weight[1]} <br/>
                            </h3>
                            </ul>
                    </div>
                }
            })
        }

    </div>
}
export default DetailsComp;
