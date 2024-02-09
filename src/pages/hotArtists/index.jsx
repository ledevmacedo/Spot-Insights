import { Link } from "react-router-dom";
import { ListCardLarge } from "../../components/cards/topCards/listCardLarge";
import { filterTopArtists } from "../../utils/utils";

export function HotArtists() {
    const listar = filterTopArtists()
    return (
        <>
            <div className="text-white-main font-2xl text-center pb-10">Your Top 100 Artists Listened!</div>

            <div className="flex flex-col gap-4" >
                {listar.map((item, index) => (
                    <Link key={index} to={`../artistDetails/${item[0]}`}>
                        <ListCardLarge listIndex={index + 1} listTitle={item[0]} listMinutes={item[1]} trackCover={"../src/assets/images/artist.png"} />
                    </Link>
                ))}
            </div>

        </>
    )
}

{/* <Link key={index} to={`artistDetails/${item[0]}`}>  </Link>*/ }