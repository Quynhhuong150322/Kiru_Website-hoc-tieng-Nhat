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
                <div className="font-inter font-bold text-xl ">Website học tiếng Nhật tuyến Kiru hoàn toàn miễn phí tích hợp đầy đủ các kiến thức, kỹ năng thông qua các video bài giảng và bài tập giúp các bạn dễ dàng chinh phục tiếng Nhật một cách dễ dàng.</div>
            </div>
        </div>
            
    );
}
export default GioiThieu;