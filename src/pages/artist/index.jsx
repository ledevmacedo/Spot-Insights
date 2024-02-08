import { LargeListCard } from "../../components/cards/topCards/largeListCard";
import { ListCard } from "../../components/cards/topCards/listCard";

import { ArtistShortStats } from "./ArtistShortStats";
import { ArtistList } from "./artistList";
import { ArtistSingleCard } from "./artistSingleCard";
// index, indexArtist, firstMinutes
export function Artist() {
    return (
        <>
            <ArtistSingleCard />
            <ArtistShortStats />
            <div className="w-full rounded-xl bg-purple-dark-light p-4 text-white-main font-2xl">
                <ArtistList />
            </div>
        </>
    )
}