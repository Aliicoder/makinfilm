import { useEffect, useRef, useState } from "react";
import img3 from './../images/3.jpg'
import Line from "../separators/separators";
import LoadMore from "../buttons/LoadMor";

const RecentWork = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);
  const card5Ref = useRef<HTMLDivElement>(null);
  const card6Ref = useRef<HTMLDivElement>(null);
  const card7Ref = useRef<HTMLDivElement>(null);
  const [wrapperCenter,setWrapperCenter] = useState(0);
  let cards:HTMLElement[];
  useEffect(()=>{
    cards = Array.from(document.querySelectorAll('.card')) as HTMLElement[];
    const coordinates = wrapperRef.current!.getBoundingClientRect();
    setWrapperCenter(_prev => coordinates.left + coordinates.width/2)
    wrapperRef.current!.addEventListener("scroll",updateCoordinates)
  },[updateCoordinates]);
  function updateCoordinates(){
    if(card1Ref.current && toleranceComparison(card1Ref.current!.getBoundingClientRect().left+150,wrapperCenter)){
      cards.forEach(card=>card.classList.remove("active"))
      card1Ref.current.classList.add("active");
    }
    if(card2Ref.current && toleranceComparison(card2Ref.current!.getBoundingClientRect().left+150,wrapperCenter)){
      cards.forEach(card=>card.classList.remove("active"))
      card2Ref.current.classList.add("active");
    }
    if(card3Ref.current && toleranceComparison(card3Ref.current!.getBoundingClientRect().left+150,wrapperCenter)){
      cards.forEach(card=>card.classList.remove("active"))
      card3Ref.current.classList.add("active");
    }
    if(card4Ref.current && toleranceComparison(card4Ref.current!.getBoundingClientRect().left+150,wrapperCenter)){
      cards.forEach(card=>card.classList.remove("active"))
      card4Ref.current.classList.add("active");
    }
    if(card5Ref.current && toleranceComparison(card5Ref.current!.getBoundingClientRect().left+150,wrapperCenter)){
      cards.forEach(card=>card.classList.remove("active"))
      card5Ref.current.classList.add("active");
    }
    if(card6Ref.current && toleranceComparison(card6Ref.current!.getBoundingClientRect().left+150,wrapperCenter)){
      cards.forEach(card=>card.classList.remove("active"))
      card6Ref.current.classList.add("active");
    } 
    if(card7Ref.current && toleranceComparison(card7Ref.current!.getBoundingClientRect().left+150,wrapperCenter)){
      cards.forEach(card=>card.classList.remove("active"))
      card7Ref.current.classList.add("active");
    }
  }
  function toleranceComparison(a:number,b:number){ // it tolerance up to 150 which one is closer to the center will get activated
    return Math.abs(a - b) <= 70;
  }
  useEffect(()=>{
    const wrapperOverFlow = wrapperRef.current
    wrapperOverFlow!.scrollLeft = (wrapperOverFlow!.scrollWidth - wrapperOverFlow!.clientWidth) / 2;
  },[]);
  return ( 
    <>
      <Line />
      <div className='container flex flex-col   px-[100px] text-white'>
        <h1 className='text-[50px] '>RECENT WORK</h1>
        <div className="flex flex-1 justify-center">
          <div 
           ref={wrapperRef}
           className='flex wrapper  items-center py-8
           recentWork gap-[20px]  overflow-x-auto   w-[1005px] '> 
          <div 
            className='flex flex-col min-w-[300px] h-[440px] rounded-[5px] overflow-hidden'>
          </div>
          <div 
            ref={card1Ref}
            className='card flex flex-col min-w-[300px] h-[440px] rounded-[5px] overflow-hidden'>
            <div className='basis-[70%]'>
              <img className='h-[100%]' src={img3} alt="" />
            </div>
            <div className='flex flex-col justify-center pl-[20px] bg-[#303030] basis-[30%]'>
              <h2  className='font-semibold'>Love at first</h2>
              <p className='text-[12px] pt-[3px] font-medium' > streaming Sep 15,2023</p>
              <p className='pt-[10px] text-[12px] font-medium' >Preview | Homepage</p>
            </div>
          </div>
          
          <div
            ref={card2Ref}
            className='card flex flex-col min-w-[300px] h-[440px] rounded-[5px] overflow-hidden'>
            <div className='basis-[70%]'>
              <img className='h-[100%]' src={img3} alt="" />
            </div>
            <div className='flex flex-col justify-center pl-[20px] bg-[#303030] basis-[30%]'>
              <h2  className='font-semibold'>Love at first</h2>
              <p className='text-[12px] pt-[3px] font-medium' > streaming Sep 15,2023</p>
              <p className='pt-[10px] text-[12px] font-medium' >Preview | Homepage</p>
            </div>
          </div>
          <div
            ref={card3Ref} 
            className='card flex flex-col min-w-[300px] h-[440px] rounded-[5px] overflow-hidden'>
            <div className='basis-[70%]'>
              <img className='h-[100%]' src={img3} alt="" />
            </div>
            <div className='flex flex-col justify-center pl-[20px] bg-[#303030] basis-[30%]'>
              <h2  className='font-semibold'>Love at first</h2>
              <p className='text-[12px] pt-[3px] font-medium' > streaming Sep 15,2023</p>
              <p className='pt-[10px] text-[12px] font-medium' >Preview | Homepage</p>
            </div>
          </div>
          <div
            ref={card4Ref}
            className='card flex active flex-col min-w-[300px] h-[440px] rounded-[5px] overflow-hidden'>
            <div className='basis-[70%]'>
              <img className='h-[100%]' src={img3} alt="" />
            </div>
            <div className='flex flex-col justify-center pl-[20px] bg-[#303030] basis-[30%]'>
              <h2  className='font-semibold'>Love at first</h2>
              <p className='text-[12px] pt-[3px] font-medium' > streaming Sep 15,2023</p>
              <p className='pt-[10px] text-[12px] font-medium' >Preview | Homepage</p>
            </div>
          </div>
          <div
            ref={card5Ref}
            className='card flex flex-col min-w-[300px] h-[440px] rounded-[5px] overflow-hidden'>
            <div className='basis-[70%]'>
              <img className='h-[100%]' src={img3} alt="" />
            </div>
            <div className='flex flex-col justify-center pl-[20px] bg-[#303030] basis-[30%]'>
              <h2  className='font-semibold'>Love at first</h2>
              <p className='text-[12px] pt-[3px] font-medium' > streaming Sep 15,2023</p>
              <p className='pt-[10px] text-[12px] font-medium' >Preview | Homepage</p>
            </div>
          </div>
          <div
            ref={card6Ref}
            className='card flex flex-col min-w-[300px] h-[440px] rounded-[5px] overflow-hidden'>
            <div className='basis-[70%]'>
              <img className='h-[100%]' src={img3} alt="" />
            </div>
            <div className='flex flex-col justify-center pl-[20px] bg-[#303030] basis-[30%]'>
              <h2  className='font-semibold'>Love at first</h2>
              <p className='text-[12px] pt-[3px] font-medium' > streaming Sep 15,2023</p>
              <p className='pt-[10px] text-[12px] font-medium' >Preview | Homepage</p>
            </div>
          </div>
          <div
            ref={card7Ref}
            className='card flex flex-col min-w-[300px] h-[440px] rounded-[5px] overflow-hidden'>
            <div className='basis-[70%]'>
              <img className='h-[100%]' src={img3} alt="" />
            </div>
            <div className='flex flex-col justify-center pl-[20px] bg-[#303030] basis-[30%]'>
              <h2  className='font-semibold'>Love at first</h2>
              <p className='text-[12px] pt-[3px] font-medium' > streaming Sep 15,2023</p>
              <p className='pt-[10px] text-[12px] font-medium' >Preview | Homepage</p>
            </div>
          </div>
          <div 
            className='flex flex-col min-w-[300px] h-[440px] rounded-[5px] overflow-hidden'>
          </div>
          </div>
        </div>
        <div className='flex justify-end mr-[100px] my-[60px]'>
              <LoadMore />
            </div>
      </div>
    </>
   );
}
 
export default RecentWork;