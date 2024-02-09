import { MusicPlay } from "iconsax-react";

export function ListCardLarge({ listIndex, listTitle, listMinutes, trackCover }) {
    return (
        <>
            <div className="w-full flex gap-2 flex-col">
                <div className="bg-purple-black-dark bg-opacity-60 hover:bg-opacity-80 rounded-lg px-4 py-4 flex justify-between">
                    <div className="flex gap-2 text-white-main content-center items-center text-lg">
                        <p># {listIndex}</p>
                        <div className="rounded-md h-10 w-10 bg-purple-black-dark" alt="" />
                        <p>{listTitle}</p>
                    </div>
                    <div className="flex flex-row gap-1 content-center  items-center">
                        <p className="text-white-dark text-opacity-[0.4] text-md font-light">
                            {listMinutes} Min</p>
                        <MusicPlay size="18" color="#6E31D1" variant="Bold" />
                    </div>
                </div>
            </div>
        </>
    )
}


