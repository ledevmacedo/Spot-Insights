import { Music } from "iconsax-react";

export function TopTrack({ track, artist, trackImg }) {
    return (
        <>
            <div className="flex flex-row gap-2 items-start mb-4">
                <div className="flex flex-row gap-2">
                    <img className="rounded-md h-20" src={trackImg} />
                </div>
                <div className="flex flex-col">
                    <p className="text-white-dark text-xs">Top Track</p>
                    <h1 className="text-purple-main font-semibold text-xl"> {track} </h1>
                    <h1 className="text-white-main font-normal text-md"> {artist} </h1>
                </div>
            </div>
        </>
        //Banner do usuario (artista mais ouvido)
        //Foto do usuário
        //Nome do usuário
        //transform -translate-x-1/2 translate-y-1/2
    )
}