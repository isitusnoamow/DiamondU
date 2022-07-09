import logo from './logo.svg';
import './App.css';
import { IoDiamond } from "react-icons/io5";
import { IconContext } from "react-icons";
import { MdCleaningServices } from "react-icons/md";
import { BiShieldQuarter } from "react-icons/bi";
import { Link } from "react-router-dom";
import diamondimg from "./static/diamond.png";

function App() {
  return (
    <div className='main'>
      <h1 className='title'>Current Status</h1>  
      <div style={{ backgroundImage: `url( ${diamondimg} )` }} className='pic'>
        <h1 className='percent'>100%</h1>
      </div>
      <button className='eval'>🔍 Evaluate</button>
      <div className='bar'>
        <IconContext.Provider value={{ size: '50px' }}>
          <Link to="clean"><MdCleaningServices /></Link>
          <IoDiamond />
          <Link to="protect"><BiShieldQuarter /></Link>
        </IconContext.Provider>
      </div>
    </div>
  );
}

export default App;
