import { LargeListCard } from "../../components/cards/topCards/largeListCard";
import { ListCard } from "../../components/cards/topCards/listCard";
import { useLocation, useParams } from "react-router-dom";
import { ArtistShortStats } from "./artistShortStats";
import { ArtistHotStat } from "./artistHotStat";
import { ArtistList } from "./artistList";
import { ArtistSingleCard } from "./artistSingleCard";
import { findIndex } from "../../utils/utils";

export function Artist(currentIndex) {
    let { artist } = useParams();
    let encontrar = findIndex(artist);
    return (
        <>
            <ArtistSingleCard artist={artist} season={"Winter ❄️"} />
            <ArtistHotStat valueTop={encontrar} valuePercent={20} />
            {/* <ArtistShortStats currentPosition={id} currentArtist={artist} /> */}
            < ArtistShortStats currentArtist={artist} />
            <div className="w-full rounded-xl bg-purple-dark-light p-4 text-white-main font-2xl">
                <ArtistList />
            </div>
        </>
    )
}