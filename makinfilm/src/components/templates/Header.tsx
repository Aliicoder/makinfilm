import { Link, NavLink } from "react-router-dom";
import TakeNow from "../buttons/TakeNow";
import makinLogo from './../../assets/Asset 10@2x.png'
import { motion } from "framer-motion";
import { MouseEvent, useEffect, useRef, useState } from "react";
import Line from "../separators/separators";
const Header = () => {
  const homeRef = useRef<HTMLAnchorElement>(null);
  const ulRef = useRef<HTMLUListElement>(null);
  const [indicator,setIndicator]= useState<number>(0);
  const [relativeCoordinates,setRelativeCoordinates] = useState<number>(0);
  useEffect(() =>{
    setRelativeCoordinates(ulRef.current!.getBoundingClientRect().left)
    setIndicator( homeRef.current!.getBoundingClientRect().width/2)
  },[]);
  const moveIndicator = (xCoordinates:number) =>{
    setIndicator(xCoordinates)
  }
  const handleIndicator = (e: MouseEvent<HTMLAnchorElement>) => {
    const target = e.target as HTMLAnchorElement
    const coordinates = target.getBoundingClientRect()
    moveIndicator(coordinates.left - relativeCoordinates! + coordinates.width/2 )
 
  }
  const variants = {
    initial :{Opacity:0,y:-137},
    animate : {Opacity:1,y:0},
  }
  return ( 
    <>
      <motion.header  
        variants={variants}
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