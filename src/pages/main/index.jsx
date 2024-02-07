import { MenuFlow } from "./menuFlow";
import { Overview } from "./overview";
import { UserInfo } from "./userInfo";

export function HomeAccont() {
    return (
        <div className="h-dvh bg-purple-black px-4">
            <UserInfo /> {/* <== Info do user e top track*/}
            <MenuFlow />  {/* <== Menu/Filter*/}
            <Overview /> {/* <== todos os demais componentes que aparecem no main*/}
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