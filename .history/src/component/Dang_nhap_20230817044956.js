import React from "react";
import Photo8 from "../image/photo8.png"
import logo from "../image/logo.png"
import { Link } from "react-router-dom";
import {FaAngleDown} from "react-icons/fa";
import { FaYoutube,  FaFacebookF, FaInstagram} from "react-icons/fa";

const DangNhap = () => {
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
                            <p className="text-[30px] font-bold pl-[50px] tracking-wide font-interBold">Đăng nhập</p>
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
                    <div className="w-[650px] h-[400px] bg-amber-300 rounded-[20px]">
                        <p className="text-center font-interBold text-[25px] pt-4">Chào mừng đến với Kiru!</p>
                        <p className="text-center font-inter text-[16px]">Bạn chưa có tài khoản? <a className="text-blue-600 font-bold">Đăng ký</a> </p>
                        <div className="pl-[50px]">
                            <div className="font-bold pt-5 pb-2">Mail hoặc số điện thoại</div>
                            <div className="h-7 w-[540px] bg-white rounded-[10px] "></div>
                        </div>
                        <div className="pl-[50px]">
                            <div className="font-bold pt-5 pb-2">Mật khẩu</div>
                            <div className="h-7 w-[540px] bg-white rounded-[10px] "></div>
                        </div>
                        <div className="flex flex-row gap-4 items-center pt-2 pl-[80px]">
                            <div className="w-3 h-3 rounded-full bg-white border border-black"></div>
                            <p className="pl-1 text-[14px]">Nhớ tài khoản</p>
                            <p className="pl-[250px] text-[14px] italic">Quên mật khẩu</p>
                        </div>
                        <div className="pt-7 items-center pl-[250px]">
                            <button 
                                type="button"
                                className = "w-[150px] h-[40px] rounded-[40px] text-white  bg-blue-500  font-interBold text-[20px] ">
                                Đăng nhập
                            </button>
                        </div>
                        <p className="text-center text-[14px] pt-4">Quay lại</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DangNhap;