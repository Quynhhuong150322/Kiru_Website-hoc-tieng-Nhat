import React from "react";


const LienHe = () => {
    return (
        <div className="">
            <div className="grid grid-cols-2 gap-[100px] pt-[100px]">
                <div className="font-inter font-bold text-[48px] pl-[150px] ">Không tìm được khoá học phù hợp?</div>
                <div className="">
                    <div className="">
                        <p className="font-inter  text-[20px] pb-5">Tên của bản</p>
                        <div className="h-[2px] w-[550px] bg-black "></div>
                    </div>
                    <div className="">
                        <p className="font-inter  text-[20px] pb-5 pt-10">Địa chỉ mail của bạn</p>
                        <div className="h-[2px] w-[550px] bg-black "></div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-[100px] pt-[50px]">
                <div className="font-inter text-[20px] pl-[150px]"><a className="font-japanese font-bold">Riku</a> sẽ giúp bạn tìm khóa học phù hợp nhé!</div>
                <div className="">
                            <button 
                                type="button"
                                className = "w-[300px] h-[70px] rounded-[40px] text-white bg-gradient-to-r from-amber-300  to-orange-500 hover:border-2 border-amber-700 hover:text-sky-500 font-interBold text-[25px] items-center">
                                Học ngay hôm nay
                            </button>
                        </div>
            </div>
            
        </div>
    )
}
export default LienHe;