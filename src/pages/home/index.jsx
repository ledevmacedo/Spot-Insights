import { Overview } from "./overview";
import { TopTrack } from "./topTrack";
import { SingleCardsGrouped } from "./singleCardsGrouped.jsx";

export function Home() {
    return (
        <div className="h-vh bg-purple-black px-4 pt-4 pb-4 flex flex-col gap-4">
            <TopTrack track={`Habits (Stay High)`} artist={"ToveLo"} trackImg={"https://i.scdn.co/image/ab67616d0000b273edbdf62135e9112a98bffa0c"} />
            <SingleCardsGrouped />
            <Overview />
        </div>

    )
}