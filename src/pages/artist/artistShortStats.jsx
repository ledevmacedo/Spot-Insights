import { SingleStatsCard } from "../home/singleStatsCard";
import { quantidadePlaysArtista, quantidadeMusicasDiferentesArtista, quantidadeMinutosArtista } from "../../utils/utils.js"
import { filterTopMusics } from "../../utils/utils.js";

export function ArtistShortStats({currentArtist,currentMusic,currentPosition}) {
    return (
        <>
            <div className="flex flex-col gap-4">
                <div className="flex flex-row gap-4">
                    <SingleStatsCard title={"Total Tracks"} badge={"All Time"} value={quantidadePlaysArtista()} />
                    <SingleStatsCard title={"Total Unique Tracks"} badge={"All Time"} value={quantidadeMusicasDiferentesArtista()} />
                </div>
                <div className="flex flex-row gap-4">
                    <SingleStatsCard title={"Minutes Listened"} badge={"All Time"}
                        value={quantidadeMinutosArtista()}
                        subValue={"Minutes"}
                    />
                </div>
            </div>
        </>
    )
}