import { MusicPlay } from "iconsax-react";

export function ListCard({ listIndex, listTitle, listMinutes, trackCover }) {
    return (
        <>
            <div className="w-full flex gap-2 flex-col">
                <div className="bg-purple-black rounded-lg px-4 py-2 flex justify-between">
                    <div className="flex gap-2 text-white-main content-center items-center text-md">
                        <p># {listIndex}</p>
                        <div className="rounded-md h-8 w-8 bg-purple-black-dark "  alt="" />
                        <p>{listTitle}</p>
                    </div>
                    <div className="flex flex-row gap-1 content-center  items-center">
                        <p className="text-white-dark text-opacity-[0.4] text-sm font-light">
                            {listMinutes} Min</p>
                        <MusicPlay size="18" color="#6E31D1" variant="Bold" />
                    </div>
                </div>
            </div>
        </>
    )
}


