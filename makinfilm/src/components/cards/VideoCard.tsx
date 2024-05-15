import img3 from './../images/3.jpg'
const VideoCard = () => {
  return ( 
    <>
      <div className='flex flex-col min-w-[308px]  h-[440px] rounded-[5px] overflow-hidden'>
            <div className='basis-[70%]'>
              <img className='h-[100%]' src={img3} alt="" />
            </div>
            <div className='flex flex-col justify-center pl-[20px] bg-[#3030306e] basis-[30%]'>
              <h2  className='font-semibold'>Love at first</h2>
              <p className='text-[12px] pt-[3px] font-normal text-[#ffffff77]' > streaming Sep 15,2023</p>
              <p className='pt-[10px] text-[12px] font-normal text-[#ffffff77]' >Preview | Homepage</p>
            </div>
          </div>
    </>
   );
}
 
export default VideoCard;