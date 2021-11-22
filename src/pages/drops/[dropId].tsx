import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import Image from 'next/image';
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import logo_black from '../../../public/assets/logo/logo_black.png';
import P from "../../components/base/P";
import Social from "../../components/base/social";
import Text from '../../components/base/text';
import Thumbnail from "../../components/drops/thumbnail";
import { useDrop } from "../../utils/base/useDrop";

export default function Drops() {

  const router = useRouter();
  const { dropId } = router.query;

  const { drop, isLoading, isError } = useDrop(dropId);

  const getArtist = (artist: string) => {
    const name = artist.split(' (')
    return name[0]
  }

  const getYear = (artist: string) => {
    const year = artist.split('(')
    return `(${year[1]}`
  }
  
  return (
    <div className="relative flex-col w-screen min-h-screen">
      <Head>
        <title>Givables - Drops</title>
      </Head>

      <main className="flex w-full">
        {!isLoading && !isError &&
          <>
            <div className="relative w-1/3 min-h-screen p-8">

              { logo_black &&
                <div className="w-full">
                  <Image src={logo_black}/>
                </div>
              }
              
              <div className="mt-6">
                <Text className={'text-xl font-bold'}>
                  {drop.title}
                </Text>
                <div className="w-1/2">
                  <P className="text-2xs">
                    {drop.styles}
                  </P>
                </div>
              </div>

              <div className="mt-20">
                <P className="text-sm text-justify">
                  {drop.description}
                </P>
                <br/>
                <P className="text-sm text-justify">
                  This drop features work from the talented {drop.artists.map((artist, i) => <span key={i}> <span className="font-bold">{getArtist(artist)}</span> {i < drop.artists.length - 1 ? `${getYear(artist)},` : ''}</span>)}
                </P>
              </div>

              <div className="absolute bottom-0 left-0 flex items-center justify-center w-full h-20 space-x-2">
                <span className="mt-1 text-2xs leading-none tracking-tighter uppercase"> DONT BE A STRANGER </span> 
                <FiArrowRight/>
                <Social text="TWITTER" link="https://twitter.com/givables"/>
                <Social text="INSTAGRAM" link="https://www.instagram.com/givables/"/>
                <Social text="DISCORD" link="https://discord.gg/357Sh5dsnX"/>
              </div>

            </div>

            <div className="flex-grow h-full p-8">
              <div className="flex flex-row flex-wrap justify-start items-start w-full h-full">
                {drop.pieces.map((piece, i) => <Thumbnail key={i} piece={piece} />)}
              </div>
            </div>
          </>
        }
      </main>
    </div>
  )
}