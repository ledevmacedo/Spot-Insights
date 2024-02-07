
import { UnicStatsCard } from "../home/unicStatsCard";
import { Overview } from "./overview";
import { TopTrack } from "./topTrack";
import { UserInfo } from "./userInfo";
import { musicasUnicas } from "../../utils/utils.js"

export function HomeAccont() {
    return (
        <div className="h-vh bg-purple-black px-4 pt-4 pb-4 flex flex-col gap-4">
            {/* <== Info do user e top track*/}
            <UserInfo userID={"@saaz"} userName="Katrina" picture={''} />
            <TopTrack track={`Habits (Stay High)`} artist={"ToveLo"} trackImg={"https://i.scdn.co/image/ab67616d0000b273edbdf62135e9112a98bffa0c"} />


            <div className="flex flex-row gap-2">
                <UnicStatsCard title={"Total Plays"} subtitle={"All Time"} value={100} />

                <UnicStatsCard title={"Total Minutes"} subtitle={"Total"} value={100} />
            </div>
            < Overview />
            {/* <== todos os demais componentes que aparecem no main*/}

        </div>

        //Banner do usua    rio (artista mais ouvido)
        //Foto do usuário
        //Nome do usuário

        //Musica mais ouvida
        //Vezes que foi ouvida
        //Quantidade de tempo alocado na musica

        //TOP ARTISTAS
        //TOP ALBUNS
        //TOP TRACKS
    )
}