import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import Image from "next/image";
import Text from "../../../components/base/text";
import logo_black from "../../../../public/assets/logo/logo_black.png";
import { usePiece } from "../../../utils/base/usePiece";
import { piece } from "../../../utils/drops/types";
import P from "../../../components/base/P";
import { FiGlobe, FiInstagram } from "react-icons/fi";

export default function Piece() {

    const router = useRouter();
    const { dropId, pieceId } = router.query;

    const { piece, isLoading, isError }: {piece: piece, isLoading: boolean, isError: boolean} = usePiece(dropId, pieceId);

    return (
        <div className="relative flex-col w-screen min-h-screen">
            { !isLoading && !isError ? 
                <>
                    <Head>
                        <title> { piece.name } - { piece.artist.name } </title>
                    </Head>

                    <main className="flex w-full">
                        <div className="relative w-1/4 min-h-screen p-8">

                        { logo_black &&
                            <div className="w-full">
                                <Image src={logo_black}/>
                            </div>
                        }
                        
                        <div className="mt-6">
                            <Text className={'text-xl font-bold'}>
                                { piece.name }
                            </Text>
                            <P className="text-sm">
                                { piece.artist.name }
                            </P>
                        </div>

                        <div className="mt-20 space-y-12">
                            <div className="space-y-1">
                                <Text className="text-sm font-bold"> Description </Text>
                                <P className="text-sm text-start italic">
                                    { piece.description.text }
                                </P>
                                <P className="text-sm text-start">
                                    { piece.description.date }
                                </P>
                                <P className="text-xs text-start">
                                    { piece.description.dimensions }
                                </P>
                            </div>

                            <div className="space-y-1">
                                <Text className="text-sm font-bold"> About The Artist </Text>
                                <P className="text-sm">
                                    { piece.artist.about }
                                </P>
                            </div>

                            <div className="space-y-1">

                                <div className="flex space-x-1">
                                    <FiGlobe/>
                                    <a href={piece.artist.website} target="_blank" rel="noopener noreferrer">
                                        <P className="text-sm">
                                            {piece.artist.website.replace(/[a-zA-Z]+:\/\/w+./i, '')}
                                        </P>
                                    </a>
                                </div>

                                <div className="flex space-x-1">
                                    <FiInstagram/>
                                    <a href={piece.artist.instagram} target="_blank" rel="noopener noreferrer">
                                        <P className="text-sm">
                                            {piece.artist.instagram.replace(/(?:(?:http|https):\/\/)?(?:www\.)?(?:instagram\.com|instagr\.am)*/im, '@')}
                                        </P>
                                    </a>
                                </div>
                            </div>

                            <div className="flex space-x-6">
                                <div className="space-y-2">
                                    <P className="text-sm"> Current Bid </P>
                                    <Text className="text-2xl font-bold"> 0.10 ETH </Text>
                                </div>
                                <div className="space-y-2">
                                    <P className="text-sm"> Auction Time </P>
                                    <Text className="text-2xl font-bold"> 23:44:09 </Text>
                                </div>
                            </div>
                        </div>

                        </div>

                        <div className="relative flex-grow w-full p-8">
                            { piece.image &&
                                <Image src={piece.image} layout="fill" objectFit="contain"/>
                            }
                        </div>
                    </main>
                </>
            :
                <>
                    <Head>
                        <title> Givables </title>
                    </Head>
                </>
            }
        </div>
    )
}