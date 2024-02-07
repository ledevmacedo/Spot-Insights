import { musicasUnicas, quantidadePlays, quantidadeMinutos, quantidadeHoras } from "../../utils/singleStats.js"
import { SingleStatsCard } from "./singleStatsCard.jsx"


export function SingleCardsGrouped() {
    return (
        <div className="bg-purple-black flex flex-col gap-2">
            <div className="flex flex-row gap-2">
                <SingleStatsCard title={"Total Tracks"} badge={"All Time"} value={quantidadePlays()} />
                <SingleStatsCard title={"Total Unique Tracks"} badge={"All Time"} value={musicasUnicas()} />
            </div>
            <div className="flex flex-row gap-2">
                <SingleStatsCard title={"Minutes Listened"} badge={"All Time"}
                    value={`${quantidadeMinutos()}`}
                    subValue={"Minutes"}
                />
            </div>
        </div>
    )
}