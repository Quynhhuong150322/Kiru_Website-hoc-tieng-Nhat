import React from "react";
import photo1 from "../image/photo1.jpeg";

const KhoaHocBefor = () => {
    return (
        <div className="">
            <div className="">
                <div className="pt-5 pl-[150px] font-inter font-bold text-[48px] w-[650px]">Gợi ý khóa học có thể phù hợp với bạn</div>
                <dic className="flex flex-row ">
                    <div className="w-[300px] h-[450px] bg-orange-100">
                        <div className="">
                            <img 
                                className="py-5 px-5 rounded-[20px]  "
                                src = {photo1}
                                alt = "Photo1" 
                            />
                        </div>
                        <div className="">Luyện thi JLPT</div>
                    </div>
                </dic>
            </div>
        </div>
    )
}
export default KhoaHocBefor;