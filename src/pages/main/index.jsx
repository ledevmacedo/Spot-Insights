import { MenuFlow } from "./menuFlow";
import { Overview } from "./overview";
import { TopTrack } from "./topTrack";
import { UserInfo } from "./userInfo";

export function HomeAccont() {
    return (
        <div className="h-dvh bg-purple-black px-4 pt-4 flex flex-col gap-4">
            <UserInfo userID={"@Zaaz-1"} userName="Katrina" picture={''} /> {/* <== Info do user e top track*/}
            <TopTrack track={`Habits (Stay High)`} artist={"ToveLo"} trackImg={"https://i.scdn.co/image/ab67616d0000b273edbdf62135e9112a98bffa0c"} />
            < MenuFlow /> {/* <== Menu/Filter*/}
            < Overview /> {/* <== todos os demais componentes que aparecem no main*/}
        </div>

        //Banner do usuario (artista mais ouvido)
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