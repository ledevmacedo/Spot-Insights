import { MusicPlay } from "iconsax-react";

export function TotalPlaysCard({ playTime }) {
    return (
        <>
            <div className="rounded-lg bg-purple-dark-light p-4 w-3/6">
                <div className="flex gap-2 items-center">
                    <MusicPlay size="25" color="#B282FF" variant="Bold" className="mt-1" />
                    <p className="text-white-main font-semibold text-normal pt-1">Musics Listened</p>
                </div>

                <div className="flex items-center gap-2 justify-center content-center">
                    <h1 className="text-white-light font-semibold text-3xl">
                        {playTime}
                    </h1>
                </div>
            </div>
        </>
    )
}