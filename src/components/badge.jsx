export function Badge({ text, num }) {
    return (
        <p className="badge bg-purple-main-dark bg-opacity-90 py-1 px-2 rounded-xl text-purple-main flex gap-2">
            <p className="font-semibold text-purple-main-light">{num}</p> {text}
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