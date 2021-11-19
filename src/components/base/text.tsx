

export default function Text({children, className}) {

    return (
        <div className={`scale-y-150`}>
            <span className={`${className}`}> {children} </span>
        </div>
    )
}