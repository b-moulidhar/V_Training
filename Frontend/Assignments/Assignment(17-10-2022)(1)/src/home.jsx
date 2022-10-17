import {BrowserRouter,Routes,Route,NavLink,Link} from "react-router-dom";
import data from "./datas/heroes data.json"
import DetailsComp from "./details.component";
import App from './app';
let Home = ()=>{
    return <>
    <div>
        <h1>Heroes list</h1>
    
            <h2>
                
                {
                    data.heroes.map((val,idx)=>{
                       return  <li key={idx}>
                            <Link to={"/details/"+val.id} >{val.name}</Link>
                            </li>
                    })
                }
                </h2>
            
    

    
    </div>
    
    </> 
}
export default Home