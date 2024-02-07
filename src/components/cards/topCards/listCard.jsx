import { MusicPlay } from "iconsax-react";

export function ListCard({ position, artist, minutes }) {
    return (
        <>
            <div className="w-full flex gap-2 flex-col">
                <div className="bg-purple-black rounded-lg px-4 py-2 flex justify-between">
                    <p className="text-white-main text-md">#{position} {artist} </p>
                    <div className="flex flex-row gap-1 content-center items-center">
                        <p className="text-white-dark text-sm font-light">
                            {minutes} Min</p>
                        <MusicPlay size="18" color="#6E31D1" variant="Bold" />
                    </div>
                </div>
            </div>
        </>
    )
}