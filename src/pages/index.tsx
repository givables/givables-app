import Head from 'next/head'
import Image from 'next/image'
import logo from '../../public/assets/logo/logo.png'

export default function Home() {

  return (
    <div className="relative flex flex-col min-h-screen py-2">
      <Head>
        <title>Givables</title>
      </Head>

      <video autoPlay muted loop className="z-0 absolute top-0 left-0 w-screen h-full" style={{objectFit: 'cover'}}>
        <source src='./assets/background.mp4' type="video/mp4"/>
      </video>
      <main className="z-10 flex flex-col flex-grow items-center justify-center w-full space-y-8">
        <div className="flex flex-col items-center justify-center">
          <div className="w-64">
            <Image src={logo}/>
          </div>
          <span className="-mt-4 text-lg"> the artist DAO</span>
        </div>
        <div className="flex items-center justify-center w-60 h-16 rounded-full border border-black bg-white cursor-pointer">
          <span> coming soon... </span>
        </div>
      </main>
    </div>
  )
}
