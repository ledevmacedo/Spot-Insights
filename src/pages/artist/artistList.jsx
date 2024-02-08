import { ListCard } from "../../components/cards/topCards/listCard";
import { MenuFlow } from "../../components/menuFlow";

export function ArtistList() {
    return (
        <>
            <div className="w-full rounded-xl bg-purple-dark-light p-4 text-white-main font-2xl">
                <div className="flex flex-col gap-2">
                    <MenuFlow />
                    <ListCard listIndex={"1"} listTitle={"SkyFall"} listMinutes={"200"} trackCover={"../src/assets/images/skyfall.jpg"} />
                    <ListCard />
                    <ListCard />
                    <ListCard />
                    <ListCard />
                    <ListCard />
                </div>
            </div>
        </>
    )
}