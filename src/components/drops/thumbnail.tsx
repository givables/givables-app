import Link from "next/link"

export default function Thumbnail({piece: piece}) {

    return (
        <Link href="/drops/1/1">
            <div className="relative w-64 h-64 m-2 rounded-lg" style={{ backgroundImage: `url(${piece.image})`, backgroundRepeat:"no-repeat", backgroundSize: "110% 110%", backgroundPositionX: '50%', backgroundPositionY:'35%'}}>
                <div className="z-10 absolute top-0 left-0 flex justify-center items-center w-full h-full opacity-0 hover:opacity-100 bg-black bg-opacity-25 cursor-pointer transition duration-200 ease-in-out">
                    <div className="py-1 px-2 bg-black bg-opacity-25">
                        <span className="uppercase leading-none text-white text-sm font-semibold"> {piece.artist.name} </span>
                    </div>
                </div>
            </div>
        </Link>
    )
}