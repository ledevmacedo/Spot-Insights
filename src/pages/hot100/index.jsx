import { ListCard } from "../../components/cards/topCards/listCard";
import { filterTopArtists } from "../../utils/utils";

export function Hot100() {
    const listar = filterTopArtists()
    return (
        <>{listar.map((item, index) => (
            <div className="flex flex-col gap-4" key={index}>
                <ListCard listIndex={index + 1} listTitle={item[0]} listMinutes={item[0]} trackCover={"../src/assets/images/artist.png"} />
            </div>
        ))}
        </>
    )
}