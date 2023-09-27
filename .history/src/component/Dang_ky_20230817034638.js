import React from "react";
import logo from "../image/logo.png"
import { Link } from "react-router-dom";

const DangKy = () => {
    return (
        <div className="">
            <div className = "bg-white top-0 h-[100px] pt-5">
                <div class="flex justify-between items-center p-1">
                    <Link to = "/">
                        <div className="flex flex-row items-center gap-5 pl-[50px] justify-center">
                            <img 
                                className="h-[65px] w-[65px] rounded-full "
                                src = {logo}
                                alt = "logo" 
                            />
                            <div className="font-japanese text-[45px] font-bold">Kiru</div>
                            <p className="text-[30px] font-bold pl-[50px] tracking-wide font-interBold">Đăng ký</p>
                        </div>
                    </Link>
                    <div className="pr-[100px]">
                        <button 
                            type="button"
                            className = "w-[100px] h-[30px] rounded-[40px] text-black bg-amber-300 hover:bg-sky-500 font-interBold text-[16px] items-center">
                            Trợ giúp
                        </button>
                    </div>
                </div>
            </div>
            <div className="h-[700px]">
                
            </div>
        </div>
    )
}
export default DangKy;