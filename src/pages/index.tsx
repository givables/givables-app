import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import logo_black from '../../public/assets/logo/logo_black.png'
import Social from '../components/base/social'
import Text from '../components/base/text'
import WaitlistButton from '../components/tools/waitlistButton'
import { FiArrowDown } from 'react-icons/fi'

export default function Home() {

  return (
    <div className="relative flex flex-col w-screen min-h-screen">
      <Head>
        <title>Givables</title>
      </Head>

      <main className="z-10 relative flex flex-col flex-grow items-center justify-center w-full">
        <div className="flex flex-col items-center justify-center">

          { logo_black &&
            <div className="w-64 sm:w-1/2">
              <Image src={logo_black}/>
            </div>
          }

          <div className="text-center mt-10 -space-y-2">
            <Text className="text-xs">
              THE CURATION DAO
            </Text>
            <Text className="text-xs"> 
              PROMOTING TALENT IN THE DIGITAL MARKET
            </Text>
          </div>

          <div className="mt-8 flex justify-center">
            <WaitlistButton/>
          </div>
        </div>

        <div className="absolute bottom-10 sm:bottom-0 left-0 flex items-center justify-center w-full h-12 space-x-2 sm:space-x-16">
          <Social text="TWITTER" link="https://twitter.com/givables"/>
          <Social text="INSTAGRAM" link="https://www.instagram.com/givables/"/>
          <Social text="DISCORD" link="https://discord.gg/357Sh5dsnX"/>
        </div>  
      </main>
    </div>
  )
}
