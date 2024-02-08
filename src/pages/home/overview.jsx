import { MusicCircle } from "iconsax-react";
import { TopCards } from "../../components/cards/topCards";
import { MusicSquare } from "iconsax-react";


export function Overview() {
    return (
        <>
            <div className="flex gap-2 flex-col justify-center items-center">
                <TopCards
                    //Propriedades do card
                    icon={<MusicSquare size="30" color="#6E31D1" variant="Bold" />}
                    title={"Top Artists"}
                    index={`#${1}`}
                    indexArtist={"Adele"}
                    firstMinutes={`${2.000} Minutes Listened`}
                    //Propriedades das
                    listIndex={"2"}
                    listTitle={"Eleda"}
                    listMinutes={200}
                />
            </div>
        </>
    )
}