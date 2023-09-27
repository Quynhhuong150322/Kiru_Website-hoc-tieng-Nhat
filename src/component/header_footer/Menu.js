import React from "react";
import logo from "../../image/logo.png"
import { Link } from "react-router-dom";
import {IoMdHome,IoLogoOctocat} from "react-icons/io";
import {GiOpenBook,GiGraduateCap} from "react-icons/gi";
import {ImBooks} from "react-icons/im";

const Menu = () => {
    return (
        <div className="flex flex-row">
            <div className="w-[250px] fixed top-0 left-0">
                <Link to = "TrangChu">
                    <div className="flex flex-row items-center gap-5 justify-center pt-2">
                        <img 
                            className="h-[70px] w-70[px] rounded-full "
                            src = {logo}
                            alt = "logo" 
                        />
                        <div className="font-japanese text-[40px] font-bold">Kiru</div>
                    </div>
                </Link>
                <ul className="pt-10 items-center">
                    <Link to = "TrangChu">
                        <li className="h-[50px] pt-2 text-center text-[16px] rounded-r-[10px] font-bold hover:bg-amber-300 hover:text-[20px] ">
                            <div className="flex flex-row gap-5 items-center pl-11 rounded-[10px]">
                                <IoMdHome className="h-[30px] w-[30px] "/>
                                <p className="">Trang chủ</p>
                            </div>
                        </li>
                    </Link>
                    <Link to = "KhoaHoc">
                        <li className="py-2">
                            <div className="flex flex-row gap-5 items-center pl-11 rounded-[10px] h-[50px] pt-2 text-center text-[16px] rounded-r-[10px] font-bold hover:bg-amber-300 hover:text-[20px]">
                                <GiOpenBook className="h-[30px] w-[30px] "/>
                                <p className="">Khoá học</p>
                            </div>
                        </li>
                    </Link>
                    <Link to = "ThiJLPT">
                        <li className="py-2">
                            <div className="flex flex-row gap-5 items-center pl-11 rounded-[10px] h-[50px] text-center text-[16px] rounded-r-[10px] font-bold hover:bg-amber-300 hover:text-[20px] ">
                                <GiGraduateCap className="h-[30px] w-[30px] "/>
                                <p className="">Thi JLPT</p>
                            </div>
                        </li>
                    </Link>
                    <Link to = "Baiviet">
                        <li className="py-2 ">
                            <div className="flex flex-row gap-5 items-center pl-11 rounded-[10px] h-[50px] pt-2 text-center text-[16px] rounded-r-[10px] font-bold hover:bg-amber-300 hover:text-[20px]">
                                <ImBooks className="h-[30px] w-[30px] "/>
                                <p className="">Bài viết</p>
                            </div>
                        </li>
                    </Link>
                    <Link to = "HoatHinh">
                        <li className="py-2">
                            <div className="flex flex-row gap-5 items-center pl-11 rounded-[10px] h-[50px] pt-2 text-center text-[16px] rounded-r-[10px] font-bold hover:bg-amber-300 hover:text-[20px]">
                                <IoLogoOctocat className="h-[30px] w-[30px] "/>
                                <p className="">Hoạt hình</p>
                            </div>
                        </li>
                    </Link>
                </ul>
            </div>
            
        </div>
    )
}
export default Menu;