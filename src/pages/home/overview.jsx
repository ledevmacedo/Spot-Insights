import { MusicCircle } from "iconsax-react";
import { TopCards } from "../../components/cards/topCards";
import { MusicSquare } from "iconsax-react";
import { encontrarArtistaMaisOuvido } from "../../utils/utils";
export function Overview() {
    const fiveArtists = encontrarArtistaMaisOuvido()
    // const fiveTracks = encontrarArtistaMaisOuvido()
    // const fiveAlbuns = encontrarArtistaMaisOuvido()
    return (
        <>
            <div className="flex gap-4 flex-col justify-center items-center">
                <TopCards
                    //função a ser chamada
                    funcao={fiveArtists}
                    //Propriedades do card
                    icon={<MusicSquare size="30" color="#6E31D1" variant="Bold" />}
                    title={"Top Artists"} />

            </div>

        </>
    )
}