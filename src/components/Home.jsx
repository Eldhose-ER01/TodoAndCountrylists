import Navbar from './Navbar'
import Typewriter from "typewriter-effect";
import { IoLogoWhatsapp } from "react-icons/io";
import Footer from './Footer';
export default function Home() {
  return (
    <div>
      
        <div>
            <Navbar/>
        </div>
        {/* <div className='bg-green-400 h-1 '>
  
        </div> */}

        <div className='w-full h-[600px] bg-white flex justify-center items-center'>
        <div className='w-[48%] h-[70%] flex flex-col'>
          <div>
          <p className='text-6xl text-black w-full text-center '>Hey Everyone</p>

          </div>
        <div className='mt-6 text-3xl text-center font-bold text-green-500'>
        <Typewriter
  onInit={(typewriter) => {
    typewriter
      .typeString("W E L C O M E <span class='ml-2'>TO</span> <span class='ml-2'>O U E R </span> <span class='ml-2'>H O M E</span>")
      .start();
  }}
  options={{
    cursor: "", // Set cursor to an empty string to hide it
    delay: 20, // Adjust delay for each character (milliseconds)
    deleteSpeed: 0, // Set delete speed to 0 to skip backspace
    typeSpeed: 90, // Adjust type speed (characters per second)
  }}
/>
          
         
        </div>
    
        
        <div className='flex justify-center items-center'>
        
<div className=' mt-5 text-lg w-96'>
<p className='text-center font-semibold'>"Every great developer you know got there by solving problems they were unqualified to solve until they actually did it"</p>
</div>
</div>
<div className='flex justify-center mt-8'>
</div>
</div>

        </div>
        
       
<div className='fixed bottom-4 right-4 animate-bounce'>
<a href='https://wa.me/' className='text-green-600 hover:text-sky-500 shadow-xl' style={{ boxShadow: '0 4px 6px rgba(255, 255, 255, 0.5)' }}>
  <IoLogoWhatsapp style={{ width: "60px", height: '60px' }} />
</a>

</div>


{/* <div className='bg-gray-900 h-1'>  

</div> */}
      <Footer/>
    </div>
  )
}
