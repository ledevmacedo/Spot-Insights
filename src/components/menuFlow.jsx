import { Calendar } from "iconsax-react";
import { ButtonIcon } from "./buttonIcon";

export function MenuFlow() {
    return (
        <>
            <div className="flex gap-2 flex-row justify-center">
                <ButtonIcon value={"4 Weeks"} isFull={true} icon={<Calendar size="16" color="#B282FF" variant="Bold" />} />
                <ButtonIcon value={"Last Month"} isFull={true} icon={<Calendar size="16" color="#B282FF" variant="Bold" />} />
                <ButtonIcon value={"Last Year"} isFull={true} icon={<Calendar size="16" color="#B282FF" variant="Bold" />} />
            </div>
        </>
        //Banner do usuario (artista mais ouvido)
        //Foto do usuário
        //Nome do usuário
        //transform -translate-x-1/2 translate-y-1/2
    )
}