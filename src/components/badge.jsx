export function Badge({ text }) {
    return (
        <p className="badge bg-purple-main-dark bg-opacity-90 py-1 px-2 rounded-xl text-purple-main">
            {text}
        </p>
    )
}

export function SmallBadge({ text }) {
    return (
        <p className="flex bg-purple-main-dark text-xs bg-opacity-90 py-1 px-2 rounded-lg text-purple-main">
            {text}
        </p>
    )
}