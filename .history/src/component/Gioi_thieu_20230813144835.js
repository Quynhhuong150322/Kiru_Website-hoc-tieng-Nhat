import React from "react";
import Bg from "../image/bg.png"

const GioiThieu = () => {
    return (
        <div class=" ">
            <div
                className="bg-[url('/Users/quynhhuong/kiru_web/src/image/bg.png')] bg-no-repeat bg-[length:750px_750px] h-[750px]"
                // src = {Bg}
                alt = "Bg" 
            >
                <div className="font-montserrat font-bold text-[60px] pl-[250px] pt-[150px]">
                    <div className="">Tiếng Nhật khó</div>
                    <div className="">Đã có Kiru lo</div>
                </div>
            </div>
        </div>
            
    );
}
export default GioiThieu;