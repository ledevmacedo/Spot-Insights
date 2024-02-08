import { SingleStatsCard } from "../home/singleStatsCard";
//badge, title, value, subValue
export function ArtistShortStats() {
    return (
        <>

            <div className="flex flex-row gap-2">
                <SingleStatsCard badge={""} title={""} value={""} subValue={""}/>
                <SingleStatsCard />
            </div>

        </>
    )
}