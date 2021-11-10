import background from '../../../public/assets/background.gif'
import Image from 'next/image'

export default function Background() {

    return (
        <>
            {background &&
                <Image src={background} alt="" className="w-full h-full" />
            }
        </>
    )
}