import { Clock } from "iconsax-react";

export function TotalPlaysCard({ playTime }) {
    return (
        <>
            <div className="rounded-lg bg-purple-dark-light p-4 w-3/6">
                <p className="text-white-main font-semibold text-normal">Total Plays</p>

                <div className="flex items-center gap-2 justify-start content-center">
                    <h1 className="text-white-light font-semibold text-3xl">
                        {playTime}
                    </h1>
                    <h1 className="text-purple-main-light font-semibold text-2xl"> x </h1>
                    <Clock size="20" color="#B282FF" variant="Bold" className="mt-2" />
                </div>

            </div>
        </>
    )
}