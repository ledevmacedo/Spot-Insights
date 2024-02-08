import { Calendar } from "iconsax-react";
import { ButtonIcon } from "./buttonIcon";

export function MenuFlow(onClick) {
    return (
        <>
            <div className="flex gap-2 flex-row justify-center">
                <ButtonIcon onClick={onClick} value={"4 Weeks"} isFull={true} />
                <ButtonIcon onClick={onClick} value={"Last Month"} isFull={true} />
                <ButtonIcon onClick={onClick} value={"Last Year"} isFull={true} />
                <ButtonIcon onClick={onClick} value={"All Time"} isFull={true} />
            </div>
        </>
        //Banner do usuario (artista mais ouvido)
        //Foto do usuário
        //Nome do usuário
        //transform -translate-x-1/2 translate-y-1/2
    )
}