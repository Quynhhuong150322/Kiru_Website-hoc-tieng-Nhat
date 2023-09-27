import React from "react";
import logo from "../../image/logo.png";
import {FaApple, FaGooglePlay} from "react-icons/fa";

const Footer = () => {
    return (
        <div class="">
            <div className="h-[350px] bg-sky-950 flex justify-between  px-[60px]">
                <div className="flex-initial w-[300px]">
                    <img 
                        className="h-[100px] w-100px] rounded-full border-2 border-white"
                        src = {logo}
                        alt = "logo" 
                    />
                    <p className="text-white">Kiru là Website học tiếng Nhật hiệu quả nhất phù hợp với mọi người. <p className="">by @Nhom2</p></p>
                </div>
                <div className="flex flex-row gap-[100px]">
                    <ul class="list-none text-white">
                        <li>Giới thiệu</li>
                        <li className="hover:text-yellow-500">Giới thiệu</li>
                        <li className="hover:text-yellow-500">Giới thiệu</li>
                        <li className="hover:text-yellow-500">Giới thiệu</li>
                        <li className="hover:text-yellow-500">Giới thiệu</li>
                        <li className="hover:text-yellow-500">Giới thiệu</li>
                    </ul>
                    <ul class="list-none text-white">
                        <li >Giới thiệu</li>
                        <li className="hover:text-yellow-500">Giới thiệu</li>
                        <li className="hover:text-yellow-500">Giới thiệu</li>
                        <li className="hover:text-yellow-500">Giới thiệu</li>
                        <li className="hover:text-yellow-500">Giới thiệu</li>
                        <li className="hover:text-yellow-500">Giới thiệu</li>
                    </ul>
                    <ul class="list-none text-white">
                        <li>Giới thiệu</li>
                        <li className="hover:text-yellow-500">Giới thiệu</li>
                        <li className="hover:text-yellow-500">Giới thiệu</li>
                        <li className="hover:text-yellow-500">Giới thiệu</li>
                        <li className="hover:text-yellow-500">Giới thiệu</li>
                        <li className="hover:text-yellow-500">Giới thiệu</li>
                    </ul>
                </div>
                <div className="">
                    <p className="text-white text-[20px] font-bold text-center pb-3">Ứng dụng di động</p>
                    <div className="h-[70px] w-[200px] bg-white rounded-[20px] flex gap-5 items-center">
                        <div className="pl-5">
                            <FaApple className="w-[45px] h-[45px]"/>
                        </div>
                        <div className="flex-initial w-64">
                            Tải về từ <p className="">App Store</p>
                        </div>
                    </div>
                    <div className="pt-5">
                        <div className="h-[70px] w-[200px] bg-white rounded-[20px] flex gap-5 items-center">
                            <div className="pl-5 ">
                                <FaGooglePlay className="w-[40px] h-[40px]"/>
                            </div>
                            <div className="flex-initial w-64">
                                Tải về từ <p className="">App Store</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
    );
}
export default Footer;