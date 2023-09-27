import React from "react";
import logo from "../../image/logo.png";
import {FaApple, FaGooglePlay} from "react-icons/fa";

const Footer = () => {
    return (
        <div class="h-[350px] bg-sky-950">
            <div className=" flex justify-between pt-[50px] px-[60px]">
                <div className="flex-initial w-[270px]">
                    <img 
                        className="h-[100px] w-100px] rounded-full border-2 border-white"
                        src = {logo}
                        alt = "logo" 
                    />
                    <p className="text-white">Kiru là Website học tiếng Nhật hiệu quả nhất phù hợp với mọi người. <p className="">by @QuynhHuong</p></p>
                </div>
                <div className="flex flex-row gap-[100px]">
                    <ul class="list-none text-white">
                        <li className="font-bold text-[20px]">Giới thiệu</li>
                        <li className="hover:text-yellow-500 pt-2">Khóa học </li>
                        <li className="hover:text-yellow-500 pt-2">Ôn tập </li>
                        <li className="hover:text-yellow-500 pt-2">Thi thử JLPT</li>
                        <li className="hover:text-yellow-500 pt-2">Blog</li>
                        <li className="hover:text-yellow-500 pt-2">Anime</li>
                    </ul>
                    <ul class="list-none text-white">
                        <li className="font-bold text-[20px]">Thông tin</li>
                        <li className="hover:text-yellow-500 pt-2">Về chúng tôi </li>
                        <li className="hover:text-yellow-500 pt-2">Điều khoản sử dụng</li>
                        <li className="hover:text-yellow-500 pt-2">Chia sẻ</li>
                    </ul>
                    <ul class="list-none text-white">
                        <li className="font-bold text-[20px]">Hỗ trợ</li>
                        <li className="hover:text-yellow-500 pt-2">Trung tâm hỗ trợ</li>
                        <li className="hover:text-yellow-500 pt-2">Thảo luận</li>
                        <li className="hover:text-yellow-500 pt-2">Liên hệ đến chúng tôi </li>
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
            <div className="pt-10 px-[100px]">
                <div className="h-[1px] w-[1200px] bg-white/50">
                    
                </div>
            </div>
        </div>
            
    );
}
export default Footer;