import React from "react";
import Bg from "../image/bg.png"
import Photo from "../image/photo1.jpeg"

const GioiThieu = () => {
    return (
        <div class="">
            <div
                className="bg-[url('/Users/quynhhuong/kiru_web/src/image/bg.png')] bg-no-repeat bg-[length:750px_750px] h-[750px] "
                // src = {Bg}
                alt = "Bg" >
                <div className="flex gap-2">
                    <div className="pl-[200px] flex-initial w-[800px]">
                        <div className="font-inter font-bold tracking-wide text-2xl subpixel-antialiased leading-[4.5rem]  pt-[150px]">
                            <div className="">Tiếng Nhật khó</div>
                            <div className="">Đã có Kiru lo</div>
                        </div>
                        <div className="font-inter font-bold text-xl pt-[50px] text-slate-500">Website học tiếng Nhật tuyến Kiru hoàn toàn miễn phí tích hợp đầy đủ các kiến thức, kỹ năng thông qua các video bài giảng và bài tập giúp các bạn dễ dàng chinh phục tiếng Nhật một cách dễ dàng.</div>
                        <div className="pt-10">
                            <button 
                                type="button"
                                className = "w-[300px] h-[70px] rounded-[40px] text-white bg-gradient-to-r from-amber-300  to-orange-500 hover:border-2 border-amber-700 hover:text-sky-500 font-interBold text-[25px] items-center">
                                Tham gia ngay
                            </button>
                        </div>
                    </div>
                    <div className="pt-[200px] ">
                        <img 
                            className="h-[400px] w-[800px] rounded-[50px]] "
                            src = {Photo}
                            alt = "Photo1" 
                        />
                    </div>
                </div>
            </div>
        </div>
            
    );
}
export default GioiThieu;