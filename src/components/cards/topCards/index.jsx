import { ListCard } from "./listCard";
import { Link } from 'react-router-dom';
import { LargeListCard } from "./largeListCard";
import { ButtonIcon } from "../../buttonIcon";


export function TopCards({ icon, title, funcao, goPage }) {
    return (
        <>
            <div className="bg-purple-black-dark w-full 
            p-4 text-white-main flex flex-col rounded-xl gap-2">
                <div className="flex flex-row gap-2 items-center" >
                    {icon}
                    <p className="text-xl font-semibold">{title}</p>
                </div>
                <Link to={"/artistDetails"}>
                    {funcao.slice(0, 1).map((item, index) => (
                        <LargeListCard key={index}
                            index={index + 1}
                            name={item[0]}
                            firstMinutes={item[1]}
                        />
                    ))}

                </Link>
                <div className="flex flex-col gap-2">
                    {funcao.slice(1, 5).map((item, index) => (
                        <ListCard key={index} listIndex={index + 2} listTitle={item[0]} listMinutes={item[1]} />
                    ))}
                </div>
                <div className="flex flex-col gap-2 pt-4">
                    <Link to={goPage} style={{ width: '100%' }}>
                        <ButtonIcon isFull={true} value={"Go to HOT 100"} />
                    </Link>
                </div>
            </div>
        </>
    )
}

// {
//     listar.map((item, index) => (
//         <div className="flex flex-col gap-4" key={index}>
//             <ListCard listIndex={index + 1} listTitle={item[0]} listMinutes={item[0]} trackCover={"../src/assets/images/artist.png"} />
//         </div>
//     ))
// }