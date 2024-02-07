export function UserImage({ imageUrl }) {
    const placeholderUser = '../src/assets/images/placeholder.svg'
    return (
        <div>
            <img className="rounded-xl h-8 w-8 bg-purple-dark-light"
                src={imageUrl == '' ? placeholderUser : imageUrl} alt="" />
        </div>
    );
}


