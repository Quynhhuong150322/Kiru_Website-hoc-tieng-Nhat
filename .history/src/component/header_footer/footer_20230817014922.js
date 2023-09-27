import React from "react";
import logo from "../../image/logo.png"

const Footer = () => {
    return (
        <div class="">
            <div className="h-[350px] bg-sky-950 flex justify-between items-center p-1">
                <div className="flex-initial w-[300px]">
                    <img 
                        className="h-[100px] w-100px] rounded-full border-2 border-white"
                        src = {logo}
                        alt = "logo" 
                    />
                    <p className="text-white">Kiru là Website học tiếng Nhật hiệu quả nhất phù hợp với mọi người. <p className="">by @Nhom2</p></p>
                </div>
                <div className="">
                    <ul class="list-none">
                        <li>Giới thiệu</li>
                        <li>Giới thiệu</li>
                        <li>Giới thiệu</li>
                        <li>Giới thiệu</li>
                        <li>Giới thiệu</li>
                    </ul>
                </div>
                <div className="">

                </div>
            </div>
        </div>
            
    );
}
export default Footer;