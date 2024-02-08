export function Badge({ text, num, isFull }) {
    return (

        <p
            style={{ width: isFull ? '100%' : '' }}
            className="badge bg-purple-main-dark bg-opacity-[0.4] py-2 px-3 rounded-xl text-purple-main flex items-center content-center justify-center gap-2">
            <p className="text-purple-main">{num}{text}</p>
        </p>
    )
}

export function SmallBadge({ text, num }) {
    return (
        <p className="flex bg-purple-main-dark text-xs bg-opacity-90 py-1 px-2 rounded-lg text-purple-main">
            <p className="font-semibold">{num}</p>  {text}
        </p>
    )
}