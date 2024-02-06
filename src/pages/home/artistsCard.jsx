export function ArtistsCard() {
    return (
        <>
            <div className="flex p-2 gap-4 content-center justify-start items-center">
                <p className="font-geist font-light text-white-dark text-xl">1</p>
                <img src="../../src/assets/images/artist.png" className="rounded-full h-8 w-8 bg-purple-main-light" />
                <p className="font-geist font-normal text-white-dark text-xl">Artista nome</p>
                <p className="font-geist font-normal text-white-dark text-xl">Artista playTime
                </p>
            </div>
        </>
    )
}