import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import logo from '../../public/assets/logo/logo.png'
import Text from '../components/base/text'
import { FaDiscord, FaInstagram, FaTwitch, FaTwitter } from 'react-icons/fa'
import WaitlistButton from '../components/tools/waitlistButton'
import Social from '../components/base/social'

export default function Home() {

  return (
    <div className="relative flex flex-col w-screen min-h-screen">
      <Head>
        <title>Givables</title>
      </Head>

      <main className="z-10 relative flex flex-col flex-grow items-center justify-center w-full">
        <div className="flex flex-col items-center justify-center">

          { logo &&
            <div className="w-3/4 sm:w-auto">
              <Image src={logo}/>
            </div>
          }

          <div className="text-center mt-2">
            <Text className="text-lg sm:text-3xl font-medium">
              THE ART CURATION DAO
            </Text>
            <Text className="text-2xs sm:text-sm font-thin"> 
              PROMOTING TALENT IN UNDERGRADUATE ARTISTS
            </Text>
          </div>

          <div className="mt-16 flex justify-around w-full">
            <WaitlistButton/>
            <a href="https://enter.givables.xyz" target="_blank" rel="noopener noreferrer">
              <Text className="text-sm sm:text-base hover:underline cursor-pointer"> ENTER.GIVABLES.XYZ </Text>
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 sm:bottom-0 left-0 flex items-center justify-center w-full h-12 space-x-2 sm:space-x-12">
          <Social logo={<FaTwitter/>} text="TWITTER" link="https://twitter.com/givables"/>
          <Social logo={<FaInstagram/>} text="INSTAGRAM" link="https://www.instagram.com/givables/"/>
          <Social logo={<FaDiscord/>} text="DISCORD" link="https://discord.gg/357Sh5dsnX"/>
        </div>  
      </main>
    </div>
  )
}
