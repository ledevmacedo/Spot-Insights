import { ListCard } from "../../components/cards/topCards/listCard";
import { filterTopMusics } from "../../utils/utils";

export function HotTracks() {
    const listar = filterTopMusics()
    return (
        <>
            <div className="text-white-main font-2xl text-center pb-10">Your Top 100 Musics Listened!</div>
            {listar.map((item, index) => (
                <div className="flex flex-col gap-4" key={index}>
                    <ListCard listIndex={index + 1} listTitle={item[0]} listMinutes={item[0]} trackCover={"../src/assets/images/artist.png"} />
                </div>
            ))}

        </>
    )
}