import { Outlet } from "react-router-dom";
import AboutMenu from "../../menu/aboutMenu/aboutmenu";
import Search from "../search/search";

export default function Layout() {
    return (
        <>
            <div className="relative min-h-[100vh]  px-[120px] bg-[#292929] text-[white]">
                <AboutMenu />
                <div className="ml-[270px] pt-[127px] w-[80%]">
                    <Search />
                    <Outlet />
                </div>
            </div>
        </>
    )
}