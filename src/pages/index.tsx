import Head from 'next/head'
import Image from 'next/image'
import logo from '../../public/assets/logo/logo.png'
import background from '../../public/assets/background.png'
import WaitlistButton from '../components/tools/waitlistButton'

export default function Home() {

  return (
    <div className="relative flex flex-col w-screen min-h-screen" style={{
      backgroundImage:  `url(${"/assets/background_img.png"})`,
    }}>
      <Head>
        <title>Givables</title>
      </Head>

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
      </main>
    </div>
  )
}
