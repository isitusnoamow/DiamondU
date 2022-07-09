import './Clean.css';
import { IoDiamond } from "react-icons/io5";
import { IconContext } from "react-icons";
import { MdCleaningServices } from "react-icons/md";
import { BiShieldQuarter } from "react-icons/bi";
import { Link } from "react-router-dom";

function Clean(){
    return(
        <div className="main-clean">
            <h1 className='title-clean'>Suggested Exercises</h1>
            <div className='med-clean'>
                <h2 className='med-title-clean'>5-Minute Meditation</h2>
            </div>
            <div className='bar'>
                <IconContext.Provider value={{ size: '50px' }}>
                <MdCleaningServices />
                <Link to="/"><IoDiamond /></Link>
                <Link to="/protect"><BiShieldQuarter /></Link>
                </IconContext.Provider>
            </div>
        </div>
    )
}

export default Clean;