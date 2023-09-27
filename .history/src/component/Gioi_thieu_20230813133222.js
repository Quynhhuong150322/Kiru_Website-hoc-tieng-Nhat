import React from "react";
import Bg from "../image/bg.png"

const GioiThieu = () => {
    return (
        <div class=" ">
            <img 
                className="h-[55px] w-55px] bg-local "
                src = {Bg}
                alt = "Bg" 
            />
            <div className="font-inter font-bold text-[60px] ">
                <div className="">Tiếng Nhật khó</div>
                <div className="">Đã có Kiru lo</div>
            </div>
        </div>
            
    );
}
export default GioiThieu;