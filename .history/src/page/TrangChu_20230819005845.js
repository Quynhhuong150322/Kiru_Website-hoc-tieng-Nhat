import React from "react";
import Photo8 from "../image/photo8.png"
import logo from "../image/logo.png"
import { Link } from "react-router-dom";
import avt from "../image/avt.png";


const TrangChu = () => {
    return (
        <div className="pt-[90px] pl-[270px]">
            <div className="flex flex-row">
                <div className="w-[450px] h-[250px] bg-amber-300/80 rounded-[20px] items-center">
                    <p className="text-center font-bold text-[20px] pt-3">Chào mừng Nhóm 2 đã đến với Kiru!</p>
                    <div className="pt-6 pl-[70px] flex flex-grow items-center">
                        <img 
                            className="h-[100px] w-[100px] rounded-[10px] "
                            src = {avt}
                            alt = "avt" 
                        />
                        <p className="font-inter font-black text-[26px] pl-8">Quỳnh Hương</p>
                    </div>
                    <div className="pt-5 pl-11">
                        <div className="h-5 w-[350px] bg-white rounded-[10px]"></div>
                    </div>
                    <div className="flex flex-row gap-[100px] pt-2">
                        <p className="font-bold items-center pl-11 ">N5</p>
                        <p className="font-bold items-center pl-7 ">00/100</p>
                        <p className="font-bold items-center pl-7 ">N4</p>
                    </div>
                </div>
                <div className="">
                    <div className="flex flex-row gap-10 pl-[30px] ">
                        <div className="w-[300px] h-[130px] bg-white shadow-2xl rounded-[20px] ">
                            <p className="text-[20px] font-black pt-4 pl-7">Khoá học</p>
                            <div className="flex flex-row gap-[100px] pt-5">
                                <p className="font-bold items-center pl-7 ">00/50</p>
                                <p className="font-bold text-[13px]">0 chứng nhận</p>
                            </div>
                            <div className="pt-2 pl-7">
                                <div className="h-3 w-[240px] bg-amber-300 rounded-[10px]"></div>
                            </div>
                        </div>
                        <div className="w-[300px] h-[130px] bg-white shadow-2xl rounded-[20px] ">
                            <p className="text-[20px] font-black pt-4 pl-7">Thi thử JLPT</p>
                            <div className="flex flex-row gap-[100px] pt-5">
                                <p className="font-bold items-center pl-7 ">00/50</p>
                                <p className="font-bold text-[13px]">0 chứng nhận</p>
                            </div>
                            <div className="pt-2 pl-7">
                                <div className="h-3 w-[240px] bg-amber-300 rounded-[10px]"></div>
                            </div>
                        </div>
                    </div>
                    <p className="pl-[30px] font-bold pt-5">Thành tích của bạn</p>
                </div>
            </div>
        </div>
    )
}
export default TrangChu;