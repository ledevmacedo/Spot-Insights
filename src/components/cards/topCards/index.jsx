import { MusicSquare } from "iconsax-react";
import { Badge } from "../../badge";
import { Clock } from "iconsax-react";
import { ListCard } from "./listCard";
import { Verify } from "iconsax-react";

export function TopCards() {
    return (
        <>
            <div className="bg-purple-black-dark w-full 
            p-4 text-white-main flex flex-col rounded-xl gap-2">
                <div className="flex flex-row gap-2 items-center" >
                    <MusicSquare size="30" color="#6E31D1" variant="Bold" />
                    <p className="text-xl font-semibold">Top Tracks</p>
                </div>
                <div className="flex flex-row gap-1">
                    <div className="flex gap-4 flex-col items-start justify-end bg-purple-black rounded-lg w-full h-96 p-4"
                    >
                        <Badge text={"Top Tracks"} />
                        <div>
                            <div className="flex items-center gap-2">
                                <p className="text-white-main text-3xl">#1 DJ Tubarão Zs</p>
                                <Verify size="30" color="#B282FF" variant="Bulk" />
                            </div>
                            <p className="text-white-main text-sm">2.500 Minutos escutados</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <ListCard position={2} artist={"Leno Brega"} minutes={400} />
                    <ListCard position={3} artist={"Inês Brasil"} minutes={305} />
                    <ListCard position={4} artist={"Saul"} minutes={120} />
                    <ListCard position={5} artist={"Senhoritas"} minutes={100} />
                </div>
            </div>
        </>
    )
}