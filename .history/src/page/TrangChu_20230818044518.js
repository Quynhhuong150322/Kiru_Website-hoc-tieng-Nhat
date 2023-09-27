import React from "react";
import Photo8 from "../image/photo8.png"
import logo from "../image/logo.png"
import { Link } from "react-router-dom";
import avt from "../image/avt.png";


const TrangChu = () => {
    return (
        <div className="pt-[90px] pl-[270px]">
            <div className="flex flex-row">
                <div className="w-[500px] h-[300px] bg-amber-300/80 rounded-[20px] items-center">
                    <p className="text-center font-bold text-[20px] pt-3">Chào mừng Nhóm 2 đã đến với Kiru!</p>
                    <div className="pt-10 pl-10 flex flex-grow items-center">
                        <img 
                            className="h-[120px] w-[120px] rounded-[10px] "
                            src = {avt}
                            alt = "avt" 
                        />
                        <p className="font-inter font-black text-[25px]">Quỳnh Hương</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TrangChu;