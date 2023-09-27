import React from "react";
import {BsSearch} from "react-icons/bs";
import {BiArrowBack,BiSolidBellRing} from "react-icons/bi";
import {FaAngleDown} from "react-icons/fa";
import avt from "../image/photo1.jpeg";

const Search = () => {
    return (
        <div className="pl-[250px] pt-3">
            <div className="flex flex-row gap-10 items-center">
                <div className="pl-10">
                    <button 
                        type="button"
                        className = "w-[30px] h-[30px] rounded-full  bg-amber-300/25  font-interBold text-[25px] items-center pl-[2px]">
                        <BiArrowBack/>
                    </button>
                </div>
                <div className="h-[40px] w-[500px] bg-amber-200/70 rounded-[20px] pl-5">
                    <div className="flex flex-row gap-2 items-center pt-2 ">
                        <BsSearch className="text-amber-400"/>
                        <p className="text-amber-400">Tìm kiếm...</p>
                    </div>
                </div>
                <BiSolidBellRing className="h-[29px] w-[29px]"/>
                <div className="flex flex-row gap-3 w-[200px] h-[50px] border border-gray-500/50 rounded-[10px] pl-2 items-center">
                    <img 
                        className="h-[35px] w-[35px] rounded-[10px]"
                        src = {avt}
                        alt = "avt" 
                    />
                    <p className="text-[13px]">Welcome back, <p>Quỳnh Hương</p></p>
                    <FaAngleDown className="pl-2"/>
                </div>
            </div>
        </div>
    )
}
export default Search;