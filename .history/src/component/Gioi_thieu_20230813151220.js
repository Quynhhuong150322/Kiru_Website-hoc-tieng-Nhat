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
                <div className="font-inter font-bold tracking-wide text-2xl subpixel-antialiased leading-[4.5rem] pl-[250px] pt-[150px]">
                    <div className="">Tiếng Nhật khó</div>
                    <div className="">Đã có Kiru lo</div>
                </div>
                <div className="font-inter font-bold text-xl pl-[250px] pt-[50px]">Website học tiếng Nhật tuyến Kiru hoàn toàn miễn phí tích hợp đầy đủ các kiến thức, kỹ năng thông qua các video bài giảng và bài tập giúp các bạn dễ dàng chinh phục tiếng Nhật một cách dễ dàng.</div>
                <button 
                    type="button"
                    className = "w-28 h-10 rounded-[20px] text-white bg-gradient-to-r from-amber-300  to-orange-500 hover:border-2 border-amber-700 hover:text-sky-500">
                    Đăng ký
                </button>
            </div>
        </div>
            
    );
}
export default GioiThieu;