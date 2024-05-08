import TakeNow from "../buttons/TakeNow";
import makinLogo from './../../assets/Asset 10@2x.png'
const Header = () => {
  return ( 
    <>
      <header className='container flex justify-between content-center p-0 px-[100px]     
        h-[137px] flex-wrap ' >
        <div>
          <img
            className='' 
            src={makinLogo} alt="makinLogo" width={146}   />
        </div>
        <ul className='flex gap-x-5 text-white  '>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>WORK</li>
          <li>CONTACT</li>
        </ul>
        <TakeNow />
     </header>
     <div className="container w-[100%] h-[1px] bg-white blur-[1px]" />
    </>
   );
}
 
export default Header;