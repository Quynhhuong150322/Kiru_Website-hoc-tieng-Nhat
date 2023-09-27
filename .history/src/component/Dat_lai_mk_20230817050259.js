import React from "react";
import Photo8 from "../image/photo8.png"
import logo from "../image/logo.png"
import { Link } from "react-router-dom";


const DatlaiMk = () => {
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
                <div className=" pr-[100px] pt-10">
                    <div className="w-[650px] h-[450px] bg-amber-300 rounded-[20px]">
                        <p className="text-center font-interBold text-[28px] pt-4">Đặt lại mật khẩu</p>
                        <p className="text-center font-inter text-[16px]">Quay lại <a className="text-blue-600 font-bold">Đăng nhập</a> </p>
                        <p className="pt-10 text-center font-inter text-[16px]">Nhập mật khẩu tối thiểu 8 ký tự bao gồm số, chữ hoa, chữ thường.<p>Mật khẩu mới và xác nhận mật khẩu phải trùng nhau.</p></p>
                        <div className="pl-[50px]">
                            <div className="font-bold pt-5 pb-2">Mail hoặc số điện thoại</div>
                            <div className="h-7 w-[540px] bg-white rounded-[10px] "></div>
                        </div>
                        <div className="pl-[50px]">
                            <div className="font-bold pt-5 pb-2">Mật khẩu</div>
                            <div className="h-7 w-[540px] bg-white rounded-[10px] "></div>
                        </div>
                        <div className="pt-7 items-center pl-[230px]">
                            <button 
                                type="button"
                                className = "w-[200px] h-[40px] rounded-[40px] text-white  bg-blue-500  font-interBold text-[20px] ">
                                Đặt lại mật khẩu
                            </button>
                        </div>
                        <p className="text-center text-[14px] pt-10">Quay lại</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DatlaiMk;