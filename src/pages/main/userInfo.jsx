import { UserImage } from "../../components/UserImage";
import { TopTrack } from "./topTrack";

export function UserInfo({userID}) {
    return (
        <>
            <div className="flex flex-row gap-2 items-center mb-4">
                <UserImage imageUrl={'https://images.pexels.com/photos/3756907/pexels-photo-3756907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} />
                <div className="flex flex-col">
                    <p className="text-white-light font-thin text-xs">@Jureminha</p>
                    <h1 className="text-white-main font-normal text-xl">Jurema Matilde</h1>
                </div>

            </div>
        </>
        //Banner do usuario (artista mais ouvido)
        //Foto do usuário
        //Nome do usuário
        //transform -translate-x-1/2 translate-y-1/2
    )
}