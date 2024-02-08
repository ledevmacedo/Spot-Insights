import { Verify } from "iconsax-react";
import { Badge } from "../../badge";

export function LargeListCard({ index, indexArtist, firstMinutes }) {
    return (
        <>
            <div className="flex flex-row gap-1">
                <div className="flex gap-4 flex-col items-start justify-end bg-purple-black rounded-lg w-full h-96 p-4"
                >
                    <Badge text={"Top Tracks"} />
                    <div>
                        <div className="flex items-center gap-2">
                            <p className="text-white-main  text-3xl"> {index} {indexArtist} </p>
                            <Verify size="30" color="#B282FF" variant="Bulk" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}