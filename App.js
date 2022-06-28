import Navbar from './Navbar';
import "./style.css";

import { useSelector, useDispatch } from 'react-redux';
import {incNum, decNum, resNum} from "./Actions/index";

function App() {
  const myState = useSelector((state) => state.changeNum)
  const dispatch = useDispatch();

 
 return (
<>
 
  <Navbar/>
  <div className='container'>
    <h1 className='title'>Increment/Decrement counter</h1>
  
    <button className="button1"
    onClick={ () => dispatch(decNum()) }
    >➖</button>
  
    <input type="text" value={myState} className='input'/>
  
    <button className="button2" 
    onClick={ () => dispatch(incNum()) }
    >➕</button>
    
    <div>
        <button className="btn btn-outline-success bg-danger text-white"
         style={{marginTop:"8px"}}
         onClick={ () => dispatch(resNum())}><h2>Reset</h2></button>
    </div>
  </div>
</>
  ); 
}

export default App;
