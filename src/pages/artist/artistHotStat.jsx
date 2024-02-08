import CountUp from 'react-countup';

export function ArtistHotStat({ valueTop, valuePercent }) {
    return (
        <>
            <div className="flex gap-4 w-full content-center justify-start items-center ">
                <div className=" h-40 w-full flex flex-col gap-2 p-4">
                    <h1 className="text-6xl font-extrabold text-purple-main">
                        # <CountUp end={valueTop} duration={2} />
                    </h1>
                    <p className="text-white-main text-opacity-[0.4]">
                        In your <span className="font-semibold">HOT 100</span> </p>
                </div>
                <div className="h-40 w-full  flex flex-col gap-2 p-4">
                    <h1 className="text-6xl font-extrabold text-purple-main">
                        <CountUp end={valuePercent} duration={6} />%
                    </h1>
                    <p className="text-white-main text-opacity-[0.4]">Of your <span className="font-semibold">most</span> listened to artists</p>
                </div>

                {/* <p className="text-normal font-normal text-white-main text-opacity-80">
                        In Your Streams
                    </p>
                    <h1 className="text-7xl font-bold text-purple-main">10%</h1> */}

            </div>
        </>
    )
}