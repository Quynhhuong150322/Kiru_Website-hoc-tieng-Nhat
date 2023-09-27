import React from "react";


const LienHe = () => {
    return (
        <div className="">
            <div className="grid grid-cols-2 gap-[300px] pt-[100px]">
                <div className="font-inter font-bold text-[48px] pl-[150px] ">Không tìm được khoá học phù hợp?</div>
                <div className="">
                    <div className="">
                        <p className="font-inter  text-[20px] pb-5">Tên của bản</p>
                        <div className="h-[2px] w-[300px] bg-black "></div>
                    </div>
                    <div className="">
                        <p className="font-inter  text-[20px] pb-5 pt-10">Địa chỉ mail của bạn</p>
                        <div className="h-[2px] w-[300px] bg-black "></div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default LienHe;