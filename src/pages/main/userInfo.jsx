import { Setting2 } from "iconsax-react";
import { UserImage } from "../../components/UserImage";

export function UserInfo({ userID }) {
    return (
        <>
            <div className="flex flex-row gap-2 items-center justify-between mb-4">
                <div className="flex flwx-row gap-2 items-center">
                    <UserImage imageUrl={'https://images.pexels.com/photos/3756907/pexels-photo-3756907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} />
                    <div className="flex flex-col">
                        <h1 className="text-white-dark text-xs">
                            @matildinha
                        </h1>
                        <h1 className="text-white-main font-normal text-sm">
                            Jurema Matilde
                        </h1>
                    </div>
                </div>
                <div>
                    <Setting2 className="cursor-pointer" size="24" color="#fff" variant="Bulk" />
                </div>
            </div>
        </>

    )
}