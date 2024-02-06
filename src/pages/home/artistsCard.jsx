import { Clock } from "iconsax-react";

export function ArtistsCard({ playTime, release, trackName, albumAuthor, albumName, episodeName, episodeShow, spotifyUrl, reasonStart, reasonEnd, shuffle, skipped }) {
    return (
        <>
            <div className=" flex p-2 gap-4  content-center justify-between items-center rounded-lg bg-purple-dark-light">
                <div className="flex gap-4 items-center">
                    <p className="font-geist font-light text-white-dark text-md">1</p>
                    <div className="rounded-full h-8 w-8 bg-purple-main" />
                    <p className="font-geist font-normal text-white-dark text-md"> {albumAuthor} </p>
                </div>
                <div className="flex gap-2">
                    <p className="font-geist font-normal text-white-dark text-md">
                        {playTime}
                    </p>
                    <Clock
                        size="22"
                        color="#6E31D1"
                        variant="Bold"
                    />
                </div>

            </div>
        </>
    )
}