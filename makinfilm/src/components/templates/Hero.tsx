import TakeNow from "../buttons/TakeNow";
import backGround from './../../assets/bg.webp'
import VerticalBlackOverLay from "../overLays/VerticalBlackOverLay";
import HorizontalBlackOverlay from "../overLays/HorizontalBlackOverLay";
import { motion } from "framer-motion";
import { Opacity } from "@mui/icons-material";
import { duration } from "@mui/material";

const Hero = () => {
  const variants = {
    initial:{Opacity:0,x:-100},
    animate:{Opacity:1,x:0}
  }
  return ( 
    <>
      <div className='container z-[1] relative flex flex-col h-[100svh] mt-[-137px] overflow-hidden p-0'>
        <img className='absolute z-[-1] w-[100%]  object-contain' src={backGround} alt=""/>
        <div className='h-[137px]'/>
        <motion.div 
           variants={variants}
           initial="initial"
           animate="animate"
           transition={{duration:0.4}}
          className='mx-[100px] mt-[100px] text-white'>
          <div 
            className=' typingContainer text-[72px]'>
            <span className='typing text-white box-decoration-clone text-balance'> welcomeTo <br /> Makin <br /> Film Production</span>
          </div>
          <p className=' w-[600px] mt-[20px] mb-[40px]'>
            With a passion for storytelling and 
            a commitment to quality, we strive to deliver unforgettable 
            cinematic experiences that resonate with audiences worldwide. Whether you're 
            a seasoned filmmaker or an aspiring talent, we invite you 
            to explore our world of possibilities and embark on a journey 
            of cinematic excellence with us.
          </p>
          <TakeNow />
        </motion.div>
        <VerticalBlackOverLay />
      </div>
    </>
   );
}
 
export default Hero;