import React from "react";
import { Link } from "react-router-dom";
import avt from "../image/avt.png";
import photo4 from "../image/photo4.png";
import photo5 from "../image/photo5.png";
import photo6 from "../image/photo6.png";
import photo7 from "../image/photo7.png";
import {GiTriceratopsHead} from "react-icons/gi";
import {GoArrowLeft, GoArrowRight} from "react-icons/go";
import {MdKeyboardArrowRight} from "react-icons/md";


const TrangChu = () => {
    return (
        <div className="pt-[90px] pl-[270px]">
            <div className="flex flex-row">
                <div className="w-[450px] h-[250px] bg-amber-300/80 rounded-[20px] items-center">
                    <p className="text-center font-bold text-[20px] pt-3">Chào mừng Nhóm 2 đã đến với Kiru!</p>
                    <div className="pt-4 pl-[70px] flex flex-grow items-center">
                        <img 
                            className="h-[100px] w-[100px] rounded-[10px] "
                            src = {avt}
                            alt = "avt" 
                        />
                        <p className="font-inter font-black text-[26px] pl-8">Quỳnh Hương</p>
                    </div>
                    <div className="pt-6 pl-11">
                        <div className="h-5 w-[350px] bg-white rounded-[10px]"></div>
                    </div>
                    <div className="flex flex-row gap-[100px] pt-2">
                        <p className="font-bold items-center pl-11 ">N5</p>
                        <p className="font-bold items-center pl-7 ">00/100</p>
                        <p className="font-bold items-center pl-7 ">N4</p>
                    </div>
                </div>
                <div className="">
                    <div className="flex flex-row gap-10 pl-[30px] ">
                        <div className="w-[300px] h-[130px] bg-white shadow-2xl rounded-[20px] ">
                            <p className="text-[20px] font-black pt-4 pl-7">Khoá học</p>
                            <div className="flex flex-row gap-[100px] pt-5">
                                <p className="font-bold items-center pl-7 ">00/50</p>
                                <p className="font-bold text-[13px]">0 chứng nhận</p>
                            </div>
                            <div className="pt-2 pl-7">
                                <div className="h-3 w-[240px] bg-amber-300 rounded-[10px]"></div>
                            </div>
                        </div>
                        <div className="w-[300px] h-[130px] bg-white shadow-2xl rounded-[20px] ">
                            <p className="text-[20px] font-black pt-4 pl-7">Thi thử JLPT</p>
                            <div className="flex flex-row gap-[100px] pt-5">
                                <p className="font-bold items-center pl-7 ">00/50</p>
                                <p className="font-bold text-[13px]">0 chứng nhận</p>
                            </div>
                            <div className="pt-2 pl-7">
                                <div className="h-3 w-[240px] bg-amber-300 rounded-[10px]"></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row pt-5 pl-[30px] text-center items-center">
                        <p className="font-bold ">Thành tích của bạn</p>
                        <p className="text-[13px] pl-5 text-sky-500">(Xem tất cả)</p>
                    </div>
                    <div className="pl-[30px] pt-3">
                        <div className="h-[50px] w-[50px] bg-sky-500 pt-1 pl-2">
                            <GiTriceratopsHead className="text-white h-[40px] w-[40px]"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-10">
                <div className="flex flex-row">
                    <p className="text-[25px] font-black ">Khoá học</p>
                    <p className=" pl-[900px] text-sky-500">Tất cả</p>
                    <MdKeyboardArrowRight className="h-[25px] w-[25px] text-sky-500"/>
                </div>
                <div className="flex flex-row gap-5 pt-5 items-center">
                    <div className="">
                        <button 
                            type="button"
                            className = "w-[30px] h-[30px] rounded-full  bg-amber-300/10  font-interBold text-[25px] items-center pl-[2px]">
                            <GoArrowLeft className=""/>
                        </button>
                    </div>
                    <div className="w-[250px] h-[350px] bg-amber-300 rounded-[20px] py-5 px-5">
                        <div className="">
                            <img 
                                className=" rounded-[20px]  "
                                src = {photo4}
                                alt = "Photo4" 
                            />
                        </div>
                        <div className="flex flex-row gap-10 pl-3">
                            <div className="pt-4 font-inter font-bold text-[16px]">Luyện đề JLPT <p>trình độ N5</p></div>
                            <div className="pt-4 font-inter font-bold text-[25px]">0%</div>
                        </div>
                    </div>
                    <div className="w-[250px] h-[350px] bg-amber-300 rounded-[20px] py-5 px-5">
                        <div className="">
                            <img 
                                className=" rounded-[20px]  "
                                src = {photo5}
                                alt = "Photo5" 
                            />
                        </div>
                        <div className="flex flex-row gap-10 pl-3">
                            <div className="pt-4 font-inter font-bold text-[16px]">Luyện đề JLPT <p>trình độ N5</p></div>
                            <div className="pt-4 font-inter font-bold text-[25px]">0%</div>
                        </div>
                    </div>
                    <div className="w-[250px] h-[350px] bg-amber-300 rounded-[20px] py-5 px-5">
                        <div className="">
                            <img 
                                className=" rounded-[20px]  "
                                src = {photo6}
                                alt = "Photo6" 
                            />
                        </div>
                        <div className="flex flex-row gap-10 pl-3">
                            <div className="pt-4 font-inter font-bold text-[16px]">Luyện đề JLPT <p>trình độ N5</p></div>
                            <div className="pt-4 font-inter font-bold text-[25px]">0%</div>
                        </div>
                    </div>
                    <div className="w-[250px] h-[350px] bg-amber-300 rounded-[20px] py-5 px-5">
                        <div className="">
                            <img 
                                className=" rounded-[20px]  "
                                src = {photo7}
                                alt = "Photo7" 
                            />
                        </div>
                        <div className="flex flex-row gap-10 pl-3">
                            <div className="pt-4 font-inter font-bold text-[16px]">Luyện đề JLPT <p>trình độ N5</p></div>
                            <div className="pt-4 font-inter font-bold text-[25px]">0%</div>
                        </div>
                    </div>
                    <div className="">
                        <button 
                            type="button"
                            className = "w-[30px] h-[30px] rounded-full  bg-amber-300/10  font-interBold text-[25px] items-center pl-[2px]">
                            <GoArrowRight className=""/>
                        </button>
                    </div>
                </div>
                <div className="flex flex-row gap-2 items-center pt-5 pl-[550px]">
                    <div className="h-[10px] w-[10px] rounded-full bg-black/30"></div>
                    <div className="h-[10px] w-[10px] rounded-full bg-black"></div>
                    <div className="h-[10px] w-[10px] rounded-full bg-black/30"></div>
                    <div className="h-[10px] w-[10px] rounded-full bg-black/30"></div>
                </div>
            </div>
            <div className="pt-10">
                <p className="text-[25px] font-black ">Khoá học</p>
                <div className="flex flex-row gap-5 pt-5 items-center">
                    <div className="">
                        <button 
                            type="button"
                            className = "w-[30px] h-[30px] rounded-full  bg-amber-300/10  font-interBold text-[25px] items-center pl-[2px]">
                            <GoArrowLeft className=""/>
                        </button>
                    </div>
                    <div className="w-[250px] h-[350px] bg-amber-300 rounded-[20px] py-5 px-5">
                        <div className="">
                            <img 
                                className=" rounded-[20px]  "
                                src = {photo4}
                                alt = "Photo4" 
                            />
                        </div>
                        <div className="flex flex-row gap-10 pl-3">
                            <div className="pt-4 font-inter font-bold text-[16px]">Luyện đề JLPT <p>trình độ N5</p></div>
                            <div className="pt-4 font-inter font-bold text-[25px]">0%</div>
                        </div>
                    </div>
                    <div className="w-[250px] h-[350px] bg-amber-300 rounded-[20px] py-5 px-5">
                        <div className="">
                            <img 
                                className=" rounded-[20px]  "
                                src = {photo5}
                                alt = "Photo5" 
                            />
                        </div>
                        <div className="flex flex-row gap-10 pl-3">
                            <div className="pt-4 font-inter font-bold text-[16px]">Luyện đề JLPT <p>trình độ N5</p></div>
                            <div className="pt-4 font-inter font-bold text-[25px]">0%</div>
                        </div>
                    </div>
                    <div className="w-[250px] h-[350px] bg-amber-300 rounded-[20px] py-5 px-5">
                        <div className="">
                            <img 
                                className=" rounded-[20px]  "
                                src = {photo6}
                                alt = "Photo6" 
                            />
                        </div>
                        <div className="flex flex-row gap-10 pl-3">
                            <div className="pt-4 font-inter font-bold text-[16px]">Luyện đề JLPT <p>trình độ N5</p></div>
                            <div className="pt-4 font-inter font-bold text-[25px]">0%</div>
                        </div>
                    </div>
                    <div className="w-[250px] h-[350px] bg-amber-300 rounded-[20px] py-5 px-5">
                        <div className="">
                            <img 
                                className=" rounded-[20px]  "
                                src = {photo7}
                                alt = "Photo7" 
                            />
                        </div>
                        <div className="flex flex-row gap-10 pl-3">
                            <div className="pt-4 font-inter font-bold text-[16px]">Luyện đề JLPT <p>trình độ N5</p></div>
                            <div className="pt-4 font-inter font-bold text-[25px]">0%</div>
                        </div>
                    </div>
                    <div className="">
                        <button 
                            type="button"
                            className = "w-[30px] h-[30px] rounded-full  bg-amber-300/10  font-interBold text-[25px] items-center pl-[2px]">
                            <GoArrowRight className=""/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TrangChu;