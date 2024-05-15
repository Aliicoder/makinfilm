import LoadMore from "../buttons/LoadMor";
import Line from "../separtors/Line";
import img1 from './../images/1.jpg'
import img2 from './../images/2.jpg'
import img3 from './../images/3.jpg'
import img4 from './../images/4.jpg'
import img5 from './../images/5.jpg'
const ShowCases = () => {
  return ( 
    <>
      <Line />
      <div className='container flex flex-col text-white px-[100px]'>
        <h1 className='text-[50px]' >SHOW CASES</h1>
            <div
              className='grid showCases flex-1 grid-cols-3'>
              <div
                className='largeCard relative'>
                <img className='h-[100%] w-[100%] object-cover' loading="lazy" src={img1}  alt="" />
              </div> 
              <div
                className='smallCard relative'>
                <img className='h-[100%] w-[100%] object-cover' loading="lazy" src={img2}  alt="" /> 
              </div>
              <div
                className='mediumCard relative'>
              
                <img className='h-[100%] w-[100%] object-cover' loading="lazy" src={img3}  alt="" />
              </div>
              <div className='mediumCard relative'>
                <img className='h-[100%] w-[100%] object-cover' loading="lazy" src={img4}  alt="" />
              </div> 
              <div className='mediumCard relative'>
                <img className='h-[100%] w-[100%] object-cover'  loading="lazy" src={img5}  alt="" />
              </div>
              <div className='smallCard relative'>
                <img className='h-[100%] w-[100%] object-cover'  loading="lazy" src={img5}  alt="" />
              </div> 
              <div className='smallCard relative'>
                <img className='h-[100%] w-[100%] object-cover' loading="lazy" src={img5}  alt="" />
              </div> 
            </div>
            <div className='flex justify-end mr-[10px] my-[60px]'>
              <LoadMore />
            </div>
      </div>
    </>
   );
}
 
export default ShowCases;