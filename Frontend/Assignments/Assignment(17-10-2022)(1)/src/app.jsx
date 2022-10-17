import {BrowserRouter,Routes,Route,NavLink,Link} from "react-router-dom";
import data from "./datas/heroes data.json"
import DetailsComp from "./details.component";
let App = ()=>{
    return <>
    <div>
        <h1>Heroes list</h1>
        <BrowserRouter>
            <h2>
                
                {
                    data.heroes.map((val,idx)=>{
                       return  <li key={idx}>
                            <Link to={"/details/"+val.id} >{val.name}</Link>
                            </li>
                    })
                }
                </h2>
            
                <Routes>
                    {/* <Route path="/"></Route> */}
                    <Route path="/details" element={<DetailsComp/>}></Route>
                    <Route path="/details/:id" element={<DetailsComp/>}></Route>
                </Routes>

        </BrowserRouter>
    </div>
    
    </> 
}
export default App