import { LargeListCard } from "../../components/cards/topCards/largeListCard";
import { ListCard } from "../../components/cards/topCards/listCard";

import { ArtistShortStats } from "./ArtistShortStats";
import { ArtistHotStat } from "./artistHotStat";
import { ArtistList } from "./artistList";
import { ArtistSingleCard } from "./artistSingleCard";
// index, indexArtist, firstMinutes
export function Artist() {
    return (
        <>
            <ArtistSingleCard artist={"Adele"} season={"Winter ❄️"} />
            <ArtistHotStat valueTop={10} valuePercent={20} />
            <ArtistShortStats />
            <div className="w-full rounded-xl bg-purple-dark-light p-4 text-white-main font-2xl">
                <ArtistList />
            </div>
        </>
    )
}