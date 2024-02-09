import { Verify } from "iconsax-react";
import { Badge } from "../../badge";

export function LargeListCard({ index, name, firstMinutes }) {
    return (
        <>

            <div className="flex gap-4 flex-col items-start justify-end bg-purple-black rounded-lg w-full h-96 p-4"
            >
                {/* <Badge text={"Top Tracks"} /> */}
                <div className="flex">
                    <div className="flex justify-between flex-col items-center gap-2 ">
                        <div className="flex gap-2 w-full">
                            <p className="text-white-main text-3xl"># {index}   {name}</p>
                            <Verify size="30" color="#B282FF" variant="Bulk" />
                        </div>
                        <div className="flex">
                            <p className="text-white-main text-opacitTotal Tracks y-[0.4]">{firstMinutes} Minutes Listened</p>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}