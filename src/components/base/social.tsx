import { ReactElement } from "react"
import Text from "./text"

export default function Social({logo, text, link, underline = true}: {logo?: ReactElement<any, any>, text: string, link: string, underline?: boolean}) {

    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <div className="-mt-1 flex items-center justify-center cursor-pointer">
                { logo && 
                    <div className="mt-1 text-xl">
                        {logo}
                    </div>
                }
                <Text className={`text-2xs ${underline && 'underline'}`}> {text} </Text>
            </div> 
        </a>
    )
}