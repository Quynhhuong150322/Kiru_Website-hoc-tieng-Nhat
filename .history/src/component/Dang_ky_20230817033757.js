import React from "react";
import logo from "../image/logo.png"
import { Link } from "react-router-dom";

const DangKy = () => {
    return (
        <div className="">
            <div className = "bg-white top-0 h-[100px] pt-10">
                <div class="flex justify-between items-center p-1">
                    <Link to = "/">
                        <div className="flex flex-row items-center gap-5 pl-[50px] justify-center">
                            <img 
                                className="h-[65px] w-[65px] rounded-full "
                                src = {logo}
                                alt = "logo" 
                            />
                            <div className="font-japanese text-[45px] font-bold">Kiru</div>
                            <p className="text-[30px] font-bold tracking-wide pl-[50px] font-interBold">Đăng ký</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default DangKy;