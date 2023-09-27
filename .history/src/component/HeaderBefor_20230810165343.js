import React from "react";
import logo from "../image/logo.png"

const Header = () => {
    return (
        <div className = "bg-white top-0 h-[70px] ">
            <div class="flex justify-between items-center p-1">
                <div className="flex flex-row items-center gap-5 pl-[50px] justify-center">
                    <img 
                        className="h-[55px] w-55px] rounded-full "
                        src = {logo}
                        alt = "logo" 
                    />
                    <div className="font-japanese text-[40px] font-bold">Kiru</div>
                </div>
                <div className=""></div>
                    <ul className="flex space-x-4 justify-start gap-10 font-interBold text-[17px] pr-28 ">
                        <li className="hover:text-yellow-500">Giới thiệu</li>
                        <li className="hover:text-yellow-500">Liên hệ</li>
                        <li className="hover:text-yellow-500">Khoá học</li>
                        <li className="hover:text-yellow-500">FAQs</li>
                    </ul>
                <div className="pr-[50px] flex items-center ">
                    <ul className="flex space-x-4 justify-start gap-1 font-interBold text-[17px] items-center">
                        <li>
                            <button
                                type="button"
                                className="w-[117px] h-10 rounded-[20px] hover:border-2 border-amber-500 hover:text-sky-500">
                                Đăng nhập
                            </button>
                        </li>
                        <li>
                            <button 
                                type="button"
                                className = "w-28 h-10 rounded-[20px] text-white bg-gradient-to-r from-amber-300  to-orange-500 hover:border-2 border-amber-700 hover:text-sky-500">
                                Đăng ký
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
    );
};
export default Header;