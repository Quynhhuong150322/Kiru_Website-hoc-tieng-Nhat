import React from "react";
import {photo4,photo5, photo6, photo7} from "../image";

const KhoaHocBefor = () => {
    return (
        <div className="">
            <div className="">
                <div className="pt-[100px] pl-[150px] font-inter font-bold text-[48px] w-[650px]">Gợi ý khóa học có thể phù hợp với bạn</div>
                <dic className="flex flex-row gap-10 px-[150px] py-10">
                    <div className="w-[250px] h-[300px] bg-orange-100 rounded-[20px] py-5 px-5">
                        <div className="">
                            <img 
                                className=" rounded-[20px]  "
                                src = {photo4}
                                alt = "Photo4" 
                            />
                        </div>
                        <div className="pt-5 font-inter font-bold text-[24px]">Luyện thi JLPT</div>
                    </div>
                    <div className="w-[250px] h-[300px] bg-orange-100 rounded-[20px] py-5 px-5">
                        <div className="">
                            <img 
                                className=" rounded-[20px]  "
                                src = {photo5}
                                alt = "Photo5" 
                            />
                        </div>
                        <div className="pt-5 font-inter font-bold text-[24px]">Luyện thi JLPT</div>
                    </div>
                    <div className="w-[250px] h-[300px] bg-orange-100 rounded-[20px] py-5 px-5">
                        <div className="">
                            <img 
                                className=" rounded-[20px]  "
                                src = {photo6}
                                alt = "Photo6" 
                            />
                        </div>
                        <div className="pt-5 font-inter font-bold text-[24px]">Luyện thi JLPT</div>
                    </div>
                    <div className="w-[250px] h-[300px] bg-orange-100 rounded-[20px] py-5 px-5">
                        <div className="">
                            <img 
                                className=" rounded-[20px]  "
                                src = {photo7}
                                alt = "Photo7" 
                            />
                        </div>
                        <div className="pt-5 font-inter font-bold text-[24px]">Luyện thi JLPT</div>
                    </div>
                </dic>
            </div>
        </div>
    )
}
export default KhoaHocBefor;