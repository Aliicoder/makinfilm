import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const TakeNow = () => {
  const MotionIconButton = motion(ArrowOutwardOutlinedIcon);
  return ( 
    <>
      <Link to={'https://wa.me/966560287771'} 
      className=' flex items-center justify-center rounded-md max-w-[150px] text-sm px-[12px] py-[8px] h-fit w-fit
        flex-nowrap text-[0.875rem]
       bg-white text-black  ring-8 outline-[#c4c4c47c] outline-4 outline ring-[#c4c4c418]
       hover:scale-95 transition hover:ring-0
        '>
            TAKE NOW
            <ArrowOutwardOutlinedIcon style={{color:'black' ,height:"20px"}}/>
      </Link>
    </>  
   );
}
 
export default TakeNow;