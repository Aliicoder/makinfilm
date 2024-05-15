import LoadMore from "../buttons/LoadMor";
import VideoCard from "../cards/VideoCard";
import Line from "../separtors/Line";

const Gallery = () => {
  return ( 
    <>
    <Line />
    <div className='container flex flex-col text-white px-[100px]'>
      <h1 className='text-[50px]' >GALLERY</h1>
           <div className="grid gap-[20px]  grid-cols-3  flex-1">
              <VideoCard />
              <VideoCard />
              <VideoCard />
              <VideoCard />
              <VideoCard />
              <VideoCard />
           </div>
        
          <div className='flex justify-end mr-[10px] my-[60px]'>
            <LoadMore />
          </div>
    </div>
  </>
   );
}
 
export default Gallery;