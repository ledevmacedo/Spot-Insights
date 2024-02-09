import { Overview } from "./overview";
import { TopTrack } from "./topTrack";
import { SingleCardsGrouped } from "./singleCardsGrouped.jsx";
import { filterTopMusics } from "../../utils/utils.js";

export function Home() {
    let firstTrack = filterTopMusics()
    return (

        <div className="h-vh bg-purple-black  pt-4 pb-4 flex flex-col gap-4">
            {firstTrack.slice(0, 1).map((item, index) => (
                <TopTrack key={index} track={item[0]} artist={item[1]} trackImg={"https://i.scdn.co/image/ab67616d0000b273edbdf62135e9112a98bffa0c"} />
            ))}
            <SingleCardsGrouped />
            <Overview />
        </div>

    )
}
