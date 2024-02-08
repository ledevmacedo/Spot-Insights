import { MusicFilter } from "iconsax-react";
import { SmallBadge } from "../../components/badge";
import CountUp from 'react-countup';

export function SingleStatsCard({ badge, title, value, subValue }) {
    return (
        <>
            <div className="rounded-lg bg-purple-black-dark p-4 w-full">
                <div className="flex items-start gap-4 flex-col justify-center content-center">
                    <div className="w-full flex flex-row justify-between">
                        <div>
                            <h1 className="text-purple-main font-semibold text-4xl">
                                <CountUp end={value} duration={5} />
                            </h1>
                            <p className="text-purple-main-light font-semibold text-xs">{subValue}</p>
                        </div>
                        <div>
                            <SmallBadge text={badge} />
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