import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';
import { Button } from '../ui/button';
const LoadMore = () => {
  return ( 
    <>
      <Button className='bg-white text-black  ring-8 outline-[#c4c4c47c] outline-4 outline ring-[#c4c4c418]'>
          Load More
          <ArrowOutwardOutlinedIcon style={{color:'black'}}/>
      </Button>
    </>  
   );
}
 
export default LoadMore;