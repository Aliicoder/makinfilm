import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';
import { Button } from '../ui/button';
const TakeNow = () => {
  return ( 
    <>
      <Button className='bg-white text-black font-normal ring-4 ring-[#AFAFAF] outline-[#E0CECE]'>
          TAKE NOW
          <ArrowOutwardOutlinedIcon style={{color:'black'}}/>
      </Button>
    </>
   );
}
 
export default TakeNow;