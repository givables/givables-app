

export default function Text({children, className}) {

    return (
        <div className={`scale-y-125`}>
            <span className={`${className} uppercase`}> {children} </span>
        </div>
    )
}