import { Setting2 } from "iconsax-react";
import { UserImage } from "../../components/UserImage";

export function UserInfo({ userID, userName,picture }) {
    return (
        <>
            <div className="flex flex-row gap-2 items-center justify-between mb-4">
                <div className="flex flwx-row gap-2 items-center">
                    <UserImage imageUrl={picture} />
                    <div className="flex flex-col">
                        <h1 className="text-white-dark text-xs">
                            {userID}
                        </h1>
                        <h1 className="text-white-main font-normal text-sm">
                            {userName}
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