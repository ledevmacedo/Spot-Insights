import { Link } from "react-router-dom";
import { ListCardLarge } from "../../components/cards/topCards/listCardLarge";
import { filterTopAlbum } from "../../utils/utils";
import { MenuFlow } from "../../components/menuFlow";

export function HotAlbuns() {
    const listar = filterTopAlbum()
    return (
        <>
            <div className="text-white-main font-2xl text-center pb-10">Your Top 100 Albuns Listened!</div>
            <MenuFlow />
            <div className="flex flex-col gap-4">
                {listar.map((item, index) => (
                    <Link to={`../artistDetails/${item[0]}`}>
                        <ListCardLarge key={index} listIndex={index + 1} listTitle={item[0]} listMinutes={item[1]} trackCover={"../src/assets/images/artist.png"} />
                    </Link>
                ))}
            </div>
        </>
    )
}

