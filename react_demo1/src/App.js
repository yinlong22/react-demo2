import Index from './test'
import React from "react";

const LazyComponent =  React.lazy(()=> new Promise((resolve)=>{
    setTimeout(()=>{
        resolve({
            default: ()=> <Index />
        })
    },2000)
}))

function App() {
  return (
    <div className="App">
        <div className="context_box"  style={ { marginTop :'50px' } }   >
            <React.Suspense fallback={ <div className="icon" >懒加载前</div> } >
                <LazyComponent />
            </React.Suspense>
        </div>
    </div>
  );
}

export default App;
