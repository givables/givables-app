

export default function Text({children, className}) {

    return (
        <div className={`scale-y-125`}>
            <span className={`${className} leading-none tracking-tighter uppercase`}> {children} </span>
        </div>
    )
}