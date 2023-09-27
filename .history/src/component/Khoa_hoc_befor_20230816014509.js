import React from "react";
import photo1 from "../image/photo1.jpeg";

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
                                src = {photo1}
                                alt = "Photo1" 
                            />
                        </div>
                        <div className="pt-5 font-inter font-bold text-[24px]">Luyện thi JLPT</div>
                    </div>
                    <div className="w-[250px] h-[300px] bg-orange-100 rounded-[20px] py-5 px-5">
                        <div className="">
                            <img 
                                className=" rounded-[20px]  "
                                src = {photo1}
                                alt = "Photo1" 
                            />
                        </div>
                        <div className="pt-5 font-inter font-bold text-[24px]">Luyện thi JLPT</div>
                    </div>
                    <div className="w-[250px] h-[300px] bg-orange-100 rounded-[20px] py-5 px-5">
                        <div className="">
                            <img 
                                className=" rounded-[20px]  "
                                src = {photo1}
                                alt = "Photo1" 
                            />
                        </div>
                        <div className="pt-5 font-inter font-bold text-[24px]">Luyện thi JLPT</div>
                    </div>
                    <div className="w-[250px] h-[300px] bg-orange-100 rounded-[20px] py-5 px-5">
                        <div className="bg-[url('/Users/quynhhuong/kiru_web/src/image/photo4.png')]" alt = "photo4">
                            {/* <img 
                                className=" rounded-[20px]  "
                                src = {photo1}
                                alt = "Photo1" 
                            /> */}
                        </div>
                        <div className="pt-5 font-inter font-bold text-[24px]">Luyện thi JLPT</div>
                    </div>
                </dic>
            </div>
        </div>
    )
}
export default KhoaHocBefor;