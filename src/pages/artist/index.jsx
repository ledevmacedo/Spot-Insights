import { LargeListCard } from "../../components/cards/topCards/largeListCard";
import { ListCard } from "../../components/cards/topCards/listCard";
import { useLocation, useParams } from "react-router-dom";
import { ArtistShortStats } from "./ArtistShortStats";
import { ArtistHotStat } from "./artistHotStat";
import { ArtistList } from "./artistList";
import { ArtistSingleCard } from "./artistSingleCard";


// index, indexArtist, firstMinutes
export function Artist() {
    let { artist } = useParams();
    return (
        <>
            <ArtistSingleCard artist={artist} season={"Winter ❄️"} />
            <ArtistHotStat valueTop={"item[1]"} valuePercent={20} />
            {/* <ArtistShortStats currentPosition={id} currentArtist={artist} /> */}
            < ArtistShortStats currentArtist={artist} />
            <div className="w-full rounded-xl bg-purple-dark-light p-4 text-white-main font-2xl">
                <ArtistList />
            </div>
        </>
    )
}