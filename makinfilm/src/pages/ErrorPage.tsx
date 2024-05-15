import { Padding } from '@mui/icons-material';
import WestIcon from '@mui/icons-material/West';
import { NavLink } from 'react-router-dom';
const ErrorPage = () => {
  return ( 
    <div className="grid bg-black h-[100svh] w-[100svw]">
      <div className="place-self-center">
        <h1 className=" text-white">SOMETHING WENT WRONG</h1>
        <div className=' flex'>
          <WestIcon color='info' sx={{paddingRight:"5px",marginRight:"7px"}}/>
          <NavLink className={" text-white font-semibold"} to={"/"}>
              GO BACK
          </NavLink>
        </div>
      </div>
    </div>
   );
}
 
export default ErrorPage;