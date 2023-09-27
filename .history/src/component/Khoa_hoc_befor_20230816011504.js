import React from "react";
import Photo2 from "../image/photo2.png";

const KhoaHocBefor = () => {
    return (
        <div className="">
            <div className="">
                <div className="pt-5 pl-[150px] font-inter font-bold text-[48px] w-[650px]">Gợi ý khóa học có thể phù hợp với bạn</div>
                <dic className="flex flex-row ">
                    <div className="w-[300px] h-[450px] bg-orange-100">
                        <div className="">
                            <img 
                                className="h-[600px] rounded-l-[20px] pt-[100px] "
                                src = {Photo2}
                                alt = "Photo2" 
                            />
                        </div>
                    </div>
                </dic>
            </div>
        </div>
    )
}
export default KhoaHocBefor;