import { IoIosSearch } from "react-icons/io";

export default function Search() {
    return (
        <>
            <div className="w-[100vw] opacity-80">
                <div className="bg-[#212121] text-[white] font-bold p-[15px] text-[20px]  rounded-[30px] text-[black] z-[20] fixed top-[37px] left-[390px] right-[120px] flex items-center">
                    <IoIosSearch className="text-[24px]" />
                    <input placeholder="Tìm kiếm bài hát" className="ml-[20px] bg-[#212121] border-none outline-none" />
                </div>
            </div>
        </>
    )
}