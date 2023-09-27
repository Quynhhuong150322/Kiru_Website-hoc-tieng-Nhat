import React from "react";
import {FaAngleDown} from "react-icons/fa";


const FAQs = () => {
    return (
        <div className="">
            <div className="">
                <div className="pt-[110px] font-inter font-bold text-[48px] text-center pb-10">Câu hỏi thường gặp (FAQs)</div>
                <div className="px-[420px] content-center  ">
                    <div className="h-[70px] w-[600px]  border border-amber-500/50 rounded-[20px]  px-10 grid grid-cols-2 gap-[400px] items-center">
                        <p className="flex-initial w-[800px] font-bold text-[20px]">Khóa học tại Kiru có tính phí hay không?</p>
                        <div className="w-[40px] h-[40px] bg-amber-500/50 rounded-[30px] items-center py-3 pl-3">
                            <FaAngleDown/>
                        </div>
                    </div>
                </div>
                <div className="px-[420px] content-center pt-5 ">
                    <div className="h-[70px] w-[600px]  border border-amber-500/50 rounded-[20px]  px-10 grid grid-cols-2 gap-[400px] items-center">
                        <p className="flex-initial w-[800px] font-bold text-[20px]">Khóa học tại Kiru có tính phí hay không?</p>
                        <div className="w-[40px] h-[40px] bg-amber-500/50 rounded-[30px] items-center py-3 pl-3">
                            <FaAngleDown/>
                        </div>
                    </div>
                </div>
                <div className="px-[420px] content-center pt-5 ">
                    <div className="h-[70px] w-[600px]  border border-amber-500/50 rounded-[20px]  px-10 grid grid-cols-2 gap-[400px] items-center">
                        <p className="flex-initial w-[800px] font-bold text-[20px]">Khóa học tại Kiru có tính phí hay không?</p>
                        <div className="w-[40px] h-[40px] bg-amber-500/50 rounded-[30px] items-center py-3 pl-3">
                            <FaAngleDown/>
                        </div>
                    </div>
                </div>
                <div className="px-[420px] content-center pt-5 ">
                    <div className="h-[70px] w-[600px]  border border-amber-500/50 rounded-[20px]  px-10 grid grid-cols-2 gap-[400px] items-center">
                        <p className="flex-initial w-[800px] font-bold text-[20px]">Khóa học tại Kiru có tính phí hay không?</p>
                        <div className="w-[40px] h-[40px] bg-amber-500/50 rounded-[30px] items-center py-3 pl-3">
                            <FaAngleDown/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-[250px] ">
                <div className="h-[200px] bg-yellow-500/40 items-center">
                    <div className="">Hãy cùng Kiru chinh phục ngọn lửa trong bạn!</div>
                    <p className="">Đăng ký để nhận ngay lộ trình học ngay hôm nay</p>
                    <div className="">
                    <button 
                        type="button"
                        className = "w-[200px] h-[50px] rounded-[40px] text-white bg-gradient-to-r from-amber-300  to-orange-500 hover:border-2 border-amber-700 hover:text-sky-500 font-interBold text-[25px] items-center">
                        Đăng ký
                    </button>
                </div>
                </div>
            </div>
        </div>
    )
}
export default FAQs;