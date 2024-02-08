import { Verify } from "iconsax-react";
import { LargeListCard } from "../../components/cards/topCards/largeListCard";
import { Badge } from "../../components/badge";


export function ArtistSingleCard() {
    return (
        <>
            <div className="bg-purple-black-dark w-full 
            p-4 text-white-main flex flex-col rounded-xl gap-2">
                <div className="flex flex-col  gap-1">
                    <img className="w-full h-96 rounded-lg" src="../src/assets/images/artist.webp" alt="" />
                    <div className="flex items-start flex-col gap-4">
                        <div className="flex items-center gap-2 pt-2">
                            <p className="text-white-main text-3xl">Adele</p>
                            <Verify size="30" color="#B282FF" variant="Bulk" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}