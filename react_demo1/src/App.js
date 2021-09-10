import './app.css';
import {BrowserRouter, Route} from "react-router-dom";
import Gongshi from "./demo/gongshi";
import {Home} from "./demo/Home";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Home/>
                <Route exact path="/"/>
                <Route path="/Gongshi" component={Gongshi}/>
            </BrowserRouter>
            <div className='showDemos'/>
        </div>
    );
}

export default App;