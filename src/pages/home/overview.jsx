import { MusicCircle } from "iconsax-react";
import { TopCards } from "../../components/cards/topCards";
import { Microphone2, Music, MusicDashboard } from "iconsax-react";
import { filterTopAlbum, filterTopArtists, filterTopMusics } from "../../utils/utils";
export function Overview() {
    const fiveArtists = filterTopArtists()
    const fiveMusics = filterTopMusics()
    const fiveAlbuns = filterTopAlbum()
    return (
        <>
            <div className="flex gap-4 flex-col justify-center items-center">
                <TopCards
                    currentIndex={10}
                    //função a ser chamada
                    funcao={fiveArtists}
                    //Propriedades do card
                    icon={<Microphone2 size="30" color="#6E31D1" variant="Bold" />}
                    title={"Top Artists"}
                    goPage={"/HotArtists"} />
                <TopCards
                    //função a ser chamada
                    funcao={fiveMusics}
                    //Propriedades do card
                    icon={<Music size="30" color="#6E31D1" variant="Bold" />}
                    title={"Top Musics"}
                    goPage={"/HotTracks"} />

                <TopCards
                    //função a ser chamada
                    funcao={fiveAlbuns}
                    //Propriedades do card
                    icon={<MusicDashboard size="30" color="#6E31D1" variant="Bold" />}
                    title={"Top Albuns"}
                    goPage={"/HotAlbuns"} />

            </div>

        </>
    )
}