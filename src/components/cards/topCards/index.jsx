import { MusicSquare } from "iconsax-react";
import { Badge } from "../../badge";
import { Clock } from "iconsax-react";
import { ListCard } from "./listCard";
import { Verify } from "iconsax-react";
import { Link } from 'react-router-dom';
import { LargeListCard } from "./largeListCard";
export function TopCards({ icon, title, index, indexArtist, firstMinutes, listIndex, listTitle, listMinutes }) {
    return (
        <>
            <div className="bg-purple-black-dark w-full 
            p-4 text-white-main flex flex-col rounded-xl gap-2">
                <div className="flex flex-row gap-2 items-center" >
                    {icon}
                    <p className="text-xl font-semibold">{title}</p>
                </div>
                <Link to={"/artistDetails"}>
                    <LargeListCard
                        index={index}
                        indexArtist={indexArtist}
                        firstMinutes={firstMinutes}
                    />
                </Link>



                <div className="flex flex-col gap-2">
                    <ListCard listIndex={listIndex} listTitle={listTitle} listMinutes={listMinutes} />
                    <ListCard listIndex={listIndex} listTitle={listTitle} listMinutes={listMinutes} />
                    <ListCard listIndex={listIndex} listTitle={listTitle} listMinutes={listMinutes} />
                    <ListCard listIndex={listIndex} listTitle={listTitle} listMinutes={listMinutes} />
                </div>
            </div>
        </>
    )
}