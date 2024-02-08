import { ListCard } from "../../components/cards/topCards/listCard";
import { encontrarArtistaMaisOuvido } from "../../utils/utils";

export function Hot100() {
    const listar = encontrarArtistaMaisOuvido()
    return (
        <>{listar.map((item, index) => (
            <div className="flex flex-col gap-4" key={index}>
                <ListCard listIndex={index + 1} listTitle={item[0]} listMinutes={item[1]} trackCover={"../src/assets/images/artist.png"} />
            </div>
        ))}
        </>
    )
}