import Head from 'next/head'
import Image from 'next/image'
import { FaDiscord } from 'react-icons/fa'
import logo from '../../public/assets/logo/logo.png'
import Intro from '../components/base/intro'
import WaitlistButton from '../components/tools/waitlistButton'

export default function Home() {

  return (
    <div className="relative flex flex-col w-screen min-h-screen">
      <Head>
        <title>Givables</title>
      </Head>

      <div className="hidden sm:block">
        <Intro/>
      </div>

      <div className="sm:hidden absolute top-0 left-0 z-0 w-full h-full" style={{
        backgroundImage:  `url(${"/assets/background_img.png"})`,
      }}></div>

      <video autoPlay muted loop className="hidden sm:block absolute z-0 top-0 left-0 w-screen h-full" style={{objectFit: 'cover'}}>
        <source src='./assets/background.mp4' type="video/mp4"/>
      </video>
      <main className="z-10 relative flex flex-col flex-grow items-center justify-center w-full">
        <div className="flex flex-col items-center justify-center">
          { logo &&
            <div className="w-56 sm:w-96">
              <Image src={logo}/>
            </div>
          }
          <span className="-mt-4 sm:text-lg"> the undergraduate artist's DAO</span>
        </div>
        <WaitlistButton/>

        <div className="mt-1 outline-none hover:underline hover:cursor-pointer">
          <a href="https://enter.givables.xyz" target="_blank"><span> enter.givables.xyz </span></a>
        </div>

        <div className="absolute bottom-0 left-0 flex items-center justify-center w-full h-12">
         <a href="https://discord.gg/357Sh5dsnX" target="_blank" rel="noopener noreferrer">
           <div className="flex items-center justify-center px-2 py-1 space-x-2 text-lg rounded-lg hover:shadow-xl hover:bg-gray-100 hover:bg-opacity-50 cursor-pointer">
            <FaDiscord /> 
            <span className="-mt-1"> discord </span>
          </div>
         </a>
        </div>  
      </main>
    </div>
  )
}
