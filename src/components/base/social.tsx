import Text from "./text"

export default function Social({logo, text, link}) {

    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <div className="flex items-center justify-center px-2 py-1 space-x-2 rounded-lg hover:shadow-xl hover:bg-gray-100 hover:bg-opacity-50 cursor-pointer">
                <div className="mt-1 text-xl">
                    {logo}
                </div>
                <Text className="text-xs"> {text} </Text>
            </div> 
        </a>
    )
}