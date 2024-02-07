import { MusicFilter } from "iconsax-react";

export function UnicStatsCard({ icon, title, value }) {
    return (
        <>
            <div className="rounded-lg bg-purple-dark-light p-4 w-3/6">
                <div className="flex gap-2 items-center">
                    {icon}
                    <p className="text-white-main font-semibold text-normal pt-1">
                        {title}
                    </p>
                </div>

                <div className="flex items-center gap-2 justify-center content-center">
                    <h1 className="text-white-light font-semibold text-3xl">
                        {value}
                    </h1>
                </div>
            </div>
        </>
    )
}