import { MusicSquare } from "iconsax-react";
import { Badge } from "../../badge";
import { Clock } from "iconsax-react";
import { ListCard } from "./listCard";
import { Verify } from "iconsax-react";

export function TopCards({ icon, title, index, indexArtist, firstMinutes, listIndex, listArtist, listMinutes }) {
    return (
        <>
            <div className="bg-purple-black-dark w-full 
            p-4 text-white-main flex flex-col rounded-xl gap-2">
                <div className="flex flex-row gap-2 items-center" >
                    {icon}
                    <p className="text-xl font-semibold">{title}</p>
                </div>
                <div className="flex flex-row gap-1">
                    <div className="flex gap-4 flex-col items-start justify-end bg-purple-black rounded-lg w-full h-96 p-4"
                    >
                        <Badge text={"Top Tracks"} />
                        <div>
                            <div className="flex items-center gap-2">
                                <p className="text-white-main text-3xl"> {index} {indexArtist} </p>
                                <Verify size="30" color="#B282FF" variant="Bulk" />
                            </div>
                            <p className="text-white-main text-sm">
                                {firstMinutes}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <ListCard listIndex={listIndex} listArtist={listArtist} listMinutes={listMinutes} />
                    <ListCard listIndex={listIndex} listArtist={listArtist} listMinutes={listMinutes} />
                    <ListCard listIndex={listIndex} listArtist={listArtist} listMinutes={listMinutes} />
                    <ListCard listIndex={listIndex} listArtist={listArtist} listMinutes={listMinutes} />
                </div>
            </div>
        </>
    )
}