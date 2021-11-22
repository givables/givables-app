

export default function P({children, className}) {

    return (
        <p className={`leading-none tracking-tighter uppercase ${className}`}>
            { children }
        </p>
    )
}