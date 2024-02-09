export function UserImage({ imageUrl }) {
    const placeholderUser = 'src/assets/images/placeholder.svg'

    return (
        <div>
            <div className="rounded-xl h-8 w-8 bg-purple-black-dark" />
            {/* src={imageUrl == '' ? placeholderUser : imageUrl} alt=""  */}
        </div>
    );
}


