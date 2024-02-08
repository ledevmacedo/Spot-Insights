import { SingleStatsCard } from "../home/singleStatsCard";
import { quantidadePlaysArtista, quantidadeMusicasDiferentesArtista, quantidadeMinutosArtista } from "../../utils/utils.js"
//Ver em que posição o artista está no top 100 (all time)
//Quantas plays no total - x
//Quantas musicas UNICAS ouvidas desse artista -x
//Quantos minutos ouviu esse artista - x
//Em qual ESTAÇÃO do ano o artista é mais ouvido
export function ArtistShortStats() {
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