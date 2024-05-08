import './index.css'
import Header from './components/templates/Header'
import backGround from './assets/bg.webp'
import TakeNow from './components/buttons/TakeNow';
function App() {

  return (
    <>
      <Header />
      <div className='container relative flex flex-col h-[100svh] mt-[-137px] overflow-hidden p-0 '>
        <img className='absolute z-[-1] w-[100%]  object-contain' src={backGround} alt=""/>
        <div className='h-[137px]'/>
        <div className='mx-[100px] mt-[100px] text-white'>
          <div className='text-[72px]'>
            <span className='text-white'> welcomeTo <br /> Makin <br /> Film Production</span>
          </div>
          <p className='w-[600px] mt-[20px] mb-[40px]'>
            With a passion for storytelling and 
            a commitment to quality, we strive to deliver unforgettable 
            cinematic experiences that resonate with audiences worldwide. Whether you're 
            a seasoned filmmaker or an aspiring talent, we invite you 
            to explore our world of possibilities and embark on a journey 
            of cinematic excellence with us.
          </p>
          <TakeNow />
        </div>
      </div>
    </>
  )
}

export default App
