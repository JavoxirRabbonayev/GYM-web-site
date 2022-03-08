
import logo from '../images/logo.png'
import { NavLink} from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '../images/Hamburger_icon.svg.png'
import {FaBars,FaTimes} from "react-icons/fa";
import '../Components/css/Navbar.css'
import {useState} from "react";
function Navbar() {
    const [nav,setNav]=useState(false)
    const [state, setState] = useState(false);
    const handleClick = () => {
      setNav(!nav)
    }
    window.addEventListener('scroll',function (){
        if(window.scrollY>50){
            setState(true)
        }
        else setState(false)
    })
   return(
       <header className={state ? "header box" :'header'}>
           <nav className='navbar'>
               <NavLink to={'/'} ><img src={logo}  alt=""/></NavLink>
               <div className="hamburger" onClick={handleClick}>
                   {nav ? <FaTimes/> :  <FaBars/>}
                  </div>
               <ul className={nav ? "nav-menu active" :"nav-menu "}>
                   <li className='nav-item'><NavLink className='nav-link' to={'/'}>Home</NavLink></li>
                   <li className='nav-item'><NavLink className='nav-link' to={'/features'}>features</NavLink></li>
                   <li className='nav-item'><NavLink className='nav-link' to={'/offer'}>Offer</NavLink></li>
                   <li className='nav-item'><NavLink className='nav-link' to={'/about'}>About</NavLink></li>
                   <li className='nav-item'><NavLink className='nav-link' to={'/contact'}>Contact</NavLink></li>


               </ul>
           </nav>
       </header>
   )
}

export default Navbar;