import React from "react";
import logo from "../../image/logo.png"
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <div className="">
            <div className="w-[250px] h-[900px] bg-green-500">
                <Link to = "">
                    <div className="flex flex-row items-center gap-5 justify-center pt-2">
                        <img 
                            className="h-[70px] w-70[px] rounded-full "
                            src = {logo}
                            alt = "logo" 
                        />
                        <div className="font-japanese text-[40px] font-bold">Kiru</div>
                    </div>
                </Link>
                <ul className="pt-7">
                    <li className="h-[50px] text-center text-[16px] font-bold hover:bg-amber-300">Trang chủ</li>
                </ul>

            </div>
        </div>
    )
}
export default Menu;