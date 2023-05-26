import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>

    {/* Screen 1 */}
      <div className='image-container w-full p-6 mb-2'>

          {/* Navbar */}
          <div className='flex h-screen justify-around  align-middle'>

            <img  src="logo.png" className='w-12 h-12' alt="logo" />
            <div className=" text-white flex gap-6 italic font-bold">
              <Link href={'#history'}  className='underline underline-offset-8'>HISTORY</Link>
              <Link href={'#team'} className='  underline underline-offset-8 '>TEAM</Link>
            </div>

          </div>

          <div className='divider flex  md:w-[66%] mx-auto justify-between align-middle'>
              <div className='logo-n-text flex gap-3 align-middle'>
                  <img className='w-12' src='logo.png' />
                  <img className=' w-36 h-14' src='divider-text.png' />
              </div>
              <div className=" text-black flex gap-6 italic font-bold self-center">
              <Link href={'#history'}  className='underline underline-offset-8'>HISTORY</Link>
              <Link href={'#team'} className='  underline underline-offset-8 '>TEAM</Link>
            </div>
          </div>

      </div>

    {/* Screen 2 */}


      <div className='history mt-24 relative'>
        <div className='flex md:w-[66%] mx-auto p-24 pb-0'>
          <div className='text-[#6d7d98] history-heading-big font-bold  text-9xl'>
            <p>01</p>
          </div>
          <div className='history-heading-small mb-4 self-end '>
            <p className=' font-extrabold text-3xl text-[#414f6b]'>HISTORY</p>
            <p className=' border-3 p-3 rounded-sm w-fit bg-[#6d7d98]'  ></p>
          </div>
         </div>
        <p className='text-black md:w-[60%] md:pl-36 pl-12 w-4/5  mx-auto text-left '>I will give you a , extremely painful can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy </p>

        <div className='carousel h-[25%] bg-[#3e4a62] w-full absolute bottom-0 opacity-80'>
            <div className='carousel-images flex justify-center gap-4 align-middle mt-12 lg:mt-8 overflow-y-scroll'>
                  <img src='/carousel-1.png' />
                  <img src='/carousel-2.png' />
                  <img src='/carousel-1.png' />
                  <img src='/carousel-2.png' />
            </div>
            <div className='ellipse flex justify-center mt-2 gap-3 '>
                <img src='/Ellipse 1 copy 2.png' />
                <img src='/Ellipse 1.png' />
                <img src='/Ellipse 1.png' />
            </div>
         </div>
      </div>

    
    {/* Screen 3 */}

    <div className='h-screen'>
      <div className='flex flex-col lg:flex-row lg:w-[66%] mx-auto p-6 gap-8'>
         <div className='flex pb-0 justify-center md:justify-start'>
          <div className='text-[#6d7d98] history-heading-big font-bold  text-9xl'>
            <p>02</p>
          </div>
          <div className='history-heading-small mb-4 self-end '>
            <p className=' font-extrabold text-3xl text-[#414f6b]'>CLIMB</p>
            <p className=' border-3 p-3 rounded-sm w-fit bg-[#6d7d98]'  ></p>
          </div>
       </div>

         <p className='text-lg self-center'>
          But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure
         </p>
      </div>

      <div className='bar h-12 mx-auto bg-[#414f6b] text-white '>
        <div className='w-[66%] mx-auto flex font-semibold text-lg gap-2 '>
          <h1 className='ml-8 bg-gray-200 text-[#414f6b] h-12 font-bold my-auto text-2xl px-4 underline pt-1 underline-offset-8'>MOUNTAIN 1</h1>
        </div>
      </div>

      <div className='mountain'>

      <div className='md:w-[66%] pt-12'>
        <div className='w-fit mx-auto bg-white p-12'>
          
            <h1 className=' font-bold text-[#414f6b] text-3xl mb-2'>SCHEDULE</h1>
            <div className='flex gap-8 mb-2'>
              <p>25 Nov 2016</p>
              <p>Vestibulum Vivera</p>
            </div>
            <div className='flex gap-8 mb-2'>
              <p>23 Mar 2012</p>
              <p>Vestibulum Vivera</p>
            </div>
            <div className='flex gap-8 mb-2'>
              <p>12 Feb 2015</p>
              <p>Vestibulum Vivera</p>
            </div>
            <div className='flex gap-8 mb-2'>
              <p>25 Nov 2017</p>
              <p>Vestibulum Vivera</p>
            </div>
            <div className='flex gap-8 mb-2'>
              <p>25 Nov 2018</p>
              <p>Vestibulum Vivera</p>
            </div>
          </div>
        </div>
        
       
      </div>
      <footer className='w-full lg:h-24 bg-[#414f6b]'>
          <div className=' px-6  lg:w-[66%] mx-auto gap-3 flex pt-6 flex-col lg:flex-row justify-between'>
                <div className='logo-n-text flex gap-3 align-middle self-center'>
                    <img className='w-12 h-12'  src='logo.png' />
                    <p className='new-font text-[#6d7d98] font-bold text-2xl leading-none text-center'> LOSANGELES <br /> <span className=' tracking-widest'>MOUNTAINS</span> </p>
                </div>
                <div className=" text-[#6d7d98] flex gap-6 italic font-bold self-center">
                  <p>COPYRIGHT 2016. ALL RIGHTS RESERVED.</p>
                </div>
          </div>
      </footer>
    </div>
      
    </main>
  )
}
