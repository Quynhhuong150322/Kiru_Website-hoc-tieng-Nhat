import React from "react";
import Photo8 from "../image/photo8.png"
import logo from "../image/logo.png"
import { Link } from "react-router-dom";
import {FaAngleDown} from "react-icons/fa";

const DangKy = () => {
    return (
        <div className="">
            <div className = "bg-white top-0 h-[100px] pt-5">
                <div class="flex justify-between items-center p-1">
                    <Link to = "/">
                        <div className="flex flex-row items-center gap-5 pl-[50px] justify-center">
                            <img 
                                className="h-[65px] w-[65px] rounded-full "
                                src = {logo}
                                alt = "logo" 
                            />
                            <div className="font-japanese text-[45px] font-bold">Kiru</div>
                            <p className="text-[30px] font-bold pl-[50px] tracking-wide font-interBold">Đăng ký</p>
                        </div>
                    </Link>
                    <div className="pr-[100px]">
                        <button 
                            type="button"
                            className = "w-[100px] h-[30px] rounded-[40px] text-black bg-amber-300 hover:bg-sky-500 font-interBold text-[16px] items-center">
                            Trợ giúp
                        </button>
                    </div>
                </div>
            </div>
            <div className="h-[800px] flex justify-between pt-7">
                <div className="">
                    <img 
                        className="h-[650px] w-[650px]  "
                        src = {Photo8}
                        alt = "Photo8" 
                    />
                </div>
                <div className=" pr-[100px]">
                    <div className="w-[650px] h-[650px] bg-amber-300 rounded-[20px]">
                        <p className="text-center font-interBold text-[25px] pt-4">Chào mừng đến với Kiru!</p>
                        <p className="text-center font-inter text-[16px]">Bạn đã có tài khoản? <a className="text-blue-600 font-bold">Đăng nhập</a> </p>
                        <div className="flex flex-row items-center pt-10 pl-[50px]">
                            <p className="pr-3 text-[16px] font-bold">Họ</p>
                            <div className="h-7 w-[200px] bg-white rounded-[10px]"></div>
                            <p className="pl-[70px] pr-3 text-[16px] font-bold">Tên</p>
                            <div className="h-7 w-[200px] bg-white rounded-[10px]"></div>
                        </div>
                        <div className="pl-[50px]">
                            <div className="font-bold pt-5 pb-2">Mail hoặc số điện thoại</div>
                            <div className="h-7 w-[540px] bg-white rounded-[10px] "></div>
                        </div>
                        <div className="pl-[50px]">
                            <div className="font-bold pt-5 pb-2">Mật khẩu</div>
                            <div className="h-7 w-[540px] bg-white rounded-[10px] "></div>
                        </div>
                        <div className="flex flex-row gap-4 items-center pt-7 pl-[50px]">
                            <p className="pr-3 text-[16px] font-bold">Năm sinh</p>
                            <div className="h-7 w-[100px] bg-white rounded-[10px] pl-4 flex flex-row gap-3 items-center">
                                Ngày
                                <FaAngleDown/>
                            </div>
                            <div className="h-7 w-[100px] bg-white rounded-[10px] pl-4 flex flex-row gap-3 items-center">
                                Tháng
                                <FaAngleDown/>
                            </div>
                            <div className="h-7 w-[100px] bg-white rounded-[10px] pl-4 flex flex-row gap-3 items-center">
                                Năm
                                <FaAngleDown/>
                            </div>
                        </div>
                        <div className="flex flex-row gap-4 items-center pt-7 pl-[50px]">
                            <p className="pr-3 text-[16px] font-bold">Giới tính</p>
                            <div className="h-7 w-[120px] bg-white rounded-[10px] pl-4 flex flex-row gap-3 items-center">
                                Giới tính
                                <FaAngleDown/>
                            </div>
                        </div>
                        <div className="flex flex-row gap-4 items-center pt-7 pl-[70px] ">
                            <div className="w-3 h-3 rounded-full bg-white border border-black"></div>
                            <p className="pl-3 text-[14px]">Tôi đã đọc và đồng ý với các Điều khoản và Chính sách của Kiru</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DangKy;