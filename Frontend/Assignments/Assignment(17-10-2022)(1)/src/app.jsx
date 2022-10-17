import {BrowserRouter,Routes,Route,NavLink,Link} from "react-router-dom";
import data from "./datas/heroes data.json"
import DetailsComp from "./details.component";
import Home from "./home";
let App = ()=>{
    return <>
    <div>
        
        <BrowserRouter>
                <Routes>
                    {/* <Route path="/"></Route> */}
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/details/:id" element={<DetailsComp/>}></Route>
                </Routes>

        </BrowserRouter>
    </div>
    
    </> 
}
export default App;
