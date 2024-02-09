import { Setting2 } from "iconsax-react";

export function Nav({ userID, userName, picture }) {
    return (
        <>
            <div className="flex flex-row gap-2 items-center justify-between mb-4">
                <div className="flex flex-row gap-2 items-center w-4/12">
                    {/* <UserImage imageUrl={""} /> */}
                    <div className="flex flex-col">
                        <h1 className="text-white-dark text-xs">
                            {userID}
                        </h1>
                        <h1 className="text-white-main font-normal text-sm">
                            {userName}
                        </h1>
                    </div>
                </div>
                <div className="flex flex-row items-center w-4/12">
                    <img src="../src/assets/images/logo.svg" className="h-8 w-8" alt="" />
                </div>
                <div>
                    <Setting2 className="cursor-pointer" size="24" color="#fff" variant="Bulk" />
                </div>
            </div>
        </>

    )
}