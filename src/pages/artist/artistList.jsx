import { ListCard } from "../../components/cards/topCards/listCard";
import { MenuFlow } from "../../components/menuFlow";
import { quantidadeMusicasDiferentesArtista } from "../../utils/utils";
import { useLocation, useParams } from "react-router-dom";

export function ArtistList() {
    let { artist } = useParams();
    let allmusics = quantidadeMusicasDiferentesArtista(artist)
    return (
        <>
            <div className="w-full rounded-xl bg-purple-dark-light text-white-main font-2xl">
                <div className="flex flex-col gap-2">
                    <MenuFlow />
                    {/* {allmusics.map((item, index) => (
                        <p key={index}>ola mundo</p>
                    ))} */}
                    <ListCard listIndex={"1"} listTitle={""} listMinutes={""} trackCover={"../src/assets/images/skyfall.jpg"} />
                    {/* {listar.map((item, index) => (
                        <Link key={index} to={`../artistDetails/${item[0]}`}>
                            <ListCardLarge key={index} listIndex={index + 1} listTitle={item[0]} listMinutes={item[1]} trackCover={"../src/assets/images/artist.png"} />
                        </Link>
                    ))} */}
                </div>
            </div>
        </>
    )
}

