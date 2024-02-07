import { MusicFilter } from "iconsax-react";
import { SmallBadge } from "../../components/badge";

export function UnicStatsCard({ icon, title, value, subtitle }) {
    return (
        <>
            <div className="rounded-lg bg-purple-black-dark p-4 w-full">
                <div className="flex items-start gap-4 flex-col justify-center content-center">
                    <div className="w-full flex flex-row justify-between">
                        <div>
                            <h1 className="text-purple-main font-semibold text-4xl">
                                {value}
                            </h1>
                        </div>
                        <div>
                            <SmallBadge text={"All Time"} />
                        </div>
                    </div>

                    <p className="text-white-dark text-normal">
                        {title}
                    </p>
                </div>
            </div>
        </>
    )
}