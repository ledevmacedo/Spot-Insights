import { LargeListCard } from "../../components/cards/topCards/largeListCard";
import { ListCard } from "../../components/cards/topCards/listCard";
import { useLocation, useParams } from "react-router-dom";
import { ArtistShortStats } from "./artistShortStats";
import { ArtistHotStat } from "./artistHotStat";
import { ArtistList } from "./artistList";
import { MenuFlow } from "../../components/menuFlow";
import { ArtistSingleCard } from "./artistSingleCard";
import { findIndex } from "../../utils/utils";
import { porcentagemPlaysArtista, filterTopMusicsArtist } from "../../utils/utils";
export function Artist(currentIndex) {
    let { artist } = useParams();
    let encontrar = findIndex(artist);
    let funcao = filterTopMusicsArtist(artist)
    return (
        <>
            <ArtistSingleCard artist={artist} season={"Winter ❄️"} />
            <ArtistHotStat valueTop={encontrar} valuePercent={porcentagemPlaysArtista(artist)} />
            {/* <ArtistShortStats currentPosition={id} currentArtist={artist} /> */}
            < ArtistShortStats currentArtist={artist} />
            <div className="w-full rounded-xl bg-purple-dark-light p-4 text-white-main font-2xl">
                <div className="flex flex-col gap-2">
                    <div className="pb-4">
                        <MenuFlow />
                    </div>
                    {funcao.slice(0, 10).map((item, index) => (
                        <ListCard key={index} currentIndex={currentIndex} listIndex={index + 1} listTitle={item[0]} listMinutes={item[1]} />

                    ))}
                </div>

                {/* <ArtistList /> */}
            </div>
        </>
    )
}