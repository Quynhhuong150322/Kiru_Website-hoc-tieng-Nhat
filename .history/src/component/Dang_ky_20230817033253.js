import React from "react";
import logo from "../../image/logo.png"
import { Link } from "react-router-dom";

const DangKy = () => {
    return (
        <div className="">
            <div className = "bg-white top-0 h-[70px] ">
                <div class="flex justify-between items-center p-1">
                    <Link to = "/">
                        <div className="flex flex-row items-center gap-5 pl-[50px] justify-center">
                            <img 
                                className="h-[55px] w-55px] rounded-full "
                                src = {logo}
                                alt = "logo" 
                            />
                            <div className="font-japanese text-[40px] font-bold">Kiru</div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default DangKy;