import Text from "./text"

export default function Social({logo, text, link, underline = true}) {

    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <div className="flex items-center justify-center px-2 py-1 space-x-2 cursor-pointer">
                <div className="mt-1 text-xl">
                    {logo}
                </div>
                <Text className={`text-xs ${underline && 'underline'}`}> {text} </Text>
            </div> 
        </a>
    )
}