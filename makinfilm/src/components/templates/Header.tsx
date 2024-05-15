import { Link, NavLink, useMatch, useResolvedPath } from "react-router-dom";
import TakeNow from "../buttons/TakeNow";
import makinLogo from './../../assets/Asset 10@2x.png'
import { animate, motion } from "framer-motion";
import { MouseEvent, useEffect, useRef, useState } from "react";
import Line from "../separtors/Line";
import { Opacity } from "@mui/icons-material";
import { Scale } from "lucide-react";
const Header = () => {
  const homeRef = useRef();
  const ulRef = useRef();
  const [indicator,setIndicator]= useState(0);
  const [relativeCoordinates,setRelativeCoordinates] = useState();
  //console.log(indicator)
  useEffect(() =>{
    setRelativeCoordinates(ulRef.current!.getBoundingClientRect().left)
    setIndicator( homeRef.current!.getBoundingClientRect().width/2)
  },[]);
  const moveIndicator = (xConrdinates) =>{
    setIndicator(xConrdinates)
  }
  const handleIndicator = (e: MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    //! get coordinates
    const coordinates = e.target.getBoundingClientRect()
    //console.log(coordinates)
    moveIndicator(coordinates.left - relativeCoordinates! + coordinates.width/2 )
 
  }
  const varients = {
    initial :{Opacity:0,y:-137},
    animate : {Opacity:1,y:0},
  }
  return ( 
    <>
      <motion.header  
        variants={varients}
        initial="initial"
        animate="animate"
        className='z-[2] sticky top-0 shadow ' >
        {/* to go one step back */}
        <div className="flex container justify-between content-center p-0 px-[100px]     
        h-[137px] flex-wrap">
          <Link to={".."}>
            <img
              className='' 
              src={makinLogo} alt="makinLogo" width={146}   />
          </Link>
          <ul
           ref={ulRef}
           className='flex navigationBar relative gap-x-5 text-white '>
            <li>
              <NavLink
               ref={homeRef}
               onClick={(e)=>handleIndicator(e)}
               className={({isActive})=>isActive?"active":undefined} to={""} end>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink 
               onClick={(e)=>handleIndicator(e)}
               className={({isActive})=>isActive?"active":undefined} to={"about"} end>
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink
               onClick={(e)=>handleIndicator(e)}
               className={({isActive})=>isActive?"active":undefined} to={"work"} end>
                WORK
              </NavLink>
            </li>
            <li>
              <NavLink
               onClick={(e)=>handleIndicator(e)}
               className={({isActive})=>isActive?("active"):undefined} to={"contact"} end>
                CONTACT
              </NavLink>
            </li>
            <div 
             style={{left:`${indicator}px`}} 
             className={`indicator absolute bottom-2 `}>
            
            </div>
          </ul>
          <TakeNow />
        </div>
     </motion.header>
     <Line />
    </>
   );
}
 
export default Header;