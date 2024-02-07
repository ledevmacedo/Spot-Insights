import { MusicFilter } from "iconsax-react";
import { SmallBadge } from "../../components/badge";

export function UnicStatsCard({ icon, title, value, subtitle }) {
    return (
        <>
            <div className="rounded-lg bg-purple-black-dark p-2 w-full">
                <div className="flex items-start gap-2 flex-col justify-center content-center">
                    <div className="flex justify-between">
                        <h1 className="text-purple-main border font-semibold text-4xl">
                            {value}
                        </h1>
                        <SmallBadge  text={"All Time"} />
                    </div>
                    <p className="text-white-dark border text-normal">
                        {title}
                    </p>
                </div>
                {/* <div className="flex gap-2 items-center">
                    {icon}
                    <p className="text-white-dark  text-normal">
                        {title}
                    </p>
                </div>

                <div className="flex items-end gap-2 justify-center content-end">
                    <h1 className="text-purple-main font-semibold text-3xl">
                        {value}
                    </h1>
                    <p className="text-purple-main-light text-xs">{subtitle}</p>
                </div> */}
            </div>
        </>
    )
}