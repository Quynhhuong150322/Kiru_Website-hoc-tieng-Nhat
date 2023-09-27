import React from "react";
import photo1 from "../image/photo1.jpeg";
import Photo2 from "../image/photo2.png";
import photo4 from "../image/photo4.png";
import photo5 from "../image/photo5.png";
import photo6 from "../image/photo6.png";
import photo7 from "../image/photo7.png";
import {IoHomeOutline,IoLogoOctocat} from "react-icons/io5";
import {GiOpenBook,GiGraduateCap} from "react-icons/gi";
import {ImBooks} from "react-icons/im";
import {MdOutlinePhonelink} from "react-icons/md";
import {FaBookReader, FaAngleDown} from "react-icons/fa"


const GioiThieu = () => {
    return (
        <div class="">
            <div
                className="bg-[url('/Users/quynhhuong/kiru_web/src/image/bg.png')] bg-no-repeat bg-[length:750px_750px] h-[750px] "
                // src = {Bg}
                alt = "Bg" >
                <div className="flex gap-[50px]">
                    <div className="pl-[200px] flex-initial w-[800px]">
                        <div className="font-inter font-bold tracking-wide text-2xl subpixel-antialiased leading-[4.5rem]  pt-[130px]">
                            <div className="">Tiếng Nhật khó</div>
                            <div className="">Đã có Kiru lo</div>
                        </div>
                        <div className="font-inter font-bold text-xl pt-[50px] text-slate-500">Website học tiếng Nhật tuyến Kiru hoàn toàn miễn phí tích hợp đầy đủ các kiến thức, kỹ năng thông qua các video bài giảng và bài tập giúp các bạn dễ dàng chinh phục tiếng Nhật một cách dễ dàng.</div>
                        <div className="pt-10">
                            <button 
                                type="button"
                                className = "w-[300px] h-[70px] rounded-[40px] text-white bg-gradient-to-r from-amber-300  to-orange-500 hover:border-2 border-amber-700 hover:text-sky-500 font-interBold text-[25px] items-center">
                                Tham gia ngay
                            </button>
                        </div>
                    </div>
                    <div className="pt-[180px] ">
                        <img 
                            className="h-[400px] w-[700px] rounded-l-[20px] shadow-[0_40px_70px_-15px_rgba(0,0,0,0.8)]"
                            src = {photo1}
                            alt = "Photo1" 
                        />
                    </div>
                </div>
            </div>
            <div className="pb-[100px]">
                <div className="font-montserrat font-bold tracking-wide text-[40px] subpixel-antialiased leading-[4.5rem] text-center">Về chúng tôi</div>
                <div className=" grid grid-cols-2 gap-[500px]">
                    <div className="pl-[200px] grid grid-cols-2 gap-10 flex-initial w-[1000px] pt-5">
                        <div className="">
                            <div className="flex items-center gap-[20px]">
                                <div className="h-[50px] w-[50px] bg-green-500 rounded-[10px] text-[40px] font-[600] cursor-pointer items-center text-center">
                                    <IoHomeOutline className="stroke-white pt-2 pl-2"/>
                                </div>
                                <p className="font-inter font-bold text-xl">Hệ thống kiến thức</p>
                            </div>
                            <div className=" pt-4 font-inter text-[17px]">Kiru cung cấp cho bạn một hệ thống học với kiến thức tiếng Nhật đầy đủ và toàn diện như: Từ vựng, Ngữ pháp, Kanji,... và các bài kiểm tra sau mỗi bài học phong phú.</div>
                        </div>
                        <div className="">
                            <div className="flex items-center gap-[20px]">
                                <div className="h-[50px] w-[50px] bg-orange-500 rounded-[10px] text-[40px] font-[600] cursor-pointer items-center text-center">
                                    <GiOpenBook className="fill-white pt-2 pl-2"/>
                                </div>
                                <p className="font-inter font-bold text-xl">Phương pháp học  hiệu quả</p>
                            </div>
                            <div className="pt-4 font-inter text-[17px]">Chương trình học tại Kiru cung cấp đầy đủ các kiến thức thông qua phương pháp học ngữ pháp qua video, học từ vựng qua xem anime.</div>
                        </div>
                        <div className="">
                            <div className="flex items-center gap-[20px]">
                                <div className="h-[50px] flex-initial w-[60px] bg-pink-500 rounded-[10px] text-[40px] font-[600] cursor-pointer items-center text-center ">
                                    <GiGraduateCap className="fill-white pt-2 pl-2"/>
                                </div>
                                <p className="font-inter font-bold text-xl">JLPT - Kho đề thi miễn phí, 
không giới hạn </p>
                            </div>
                            <div className="pt-4 font-inter text-[17px]">Kiru cùng bạn ôn tập lại kiến thức và chuẩn bị đầy đủ hành trang trước khi bước vào kỳ thi chính thức như: Trắc nghiệm kanji, Luyện từ vựng,...với các trình độ khác nhau N5, N4,... </div>
                        </div>
                        <div className="">
                            <div className="flex items-center gap-[20px]">
                                <div className="h-[50px] w-[50px] bg-blue-500 rounded-[10px] text-[40px] font-[600] cursor-pointer items-center text-center">
                                    <ImBooks className="fill-white pt-2 pl-2"/>
                                </div>
                                <p className="font-inter font-bold text-xl">Blog - Những câu chuyện thú vị </p>
                            </div>
                            <div className="pt-4 font-inter text-[17px]">Truyền cảm hứng học tiếng Nhật đến các bạn qua các bài Blog chia sẻ về kiến thức,trải nghiệm khi học tiếng Nhật, Chia sẻ nhưng kinh nghiệm trong cuộc sống tại Nhật,...với nhiều chủ đề thú vị khác nhau. </div>
                        </div>
                        <div className="">
                            <div className="flex items-center gap-[20px]">
                                <div className="h-[50px] w-[60px] bg-violet-500 rounded-[10px] text-[40px] font-[600] cursor-pointer items-center text-center">
                                    <IoLogoOctocat className="fill-white pt-2 pl-2"/>
                                </div>
                                <p className="font-inter font-bold text-xl">JLPT - Kho đề thi miễn phí, 
không giới hạn </p>
                            </div>
                            <div className="pt-4 font-inter text-[17px]">Kiru cùng bạn ôn tập lại kiến thức và chuẩn bị đầy đủ hành trang trước khi bước vào kỳ thi chính thức như: Trắc nghiệm kanji, Luyện từ vựng,...với các trình độ khác nhau N5, N4,... </div>
                        </div>
                        <div className="">
                            <div className="flex items-center gap-[20px]">
                                <div className="h-[50px] w-[50px] bg-amber-800 rounded-[10px] text-[40px] font-[600] cursor-pointer items-center text-center">
                                    <MdOutlinePhonelink className="fill-white pt-2 pl-2"/>
                                </div>
                                <p className="font-inter font-bold text-xl">Học mọi lúc mọi nơi</p>
                            </div>
                            <div className="pt-4 font-inter text-[17px] ">Khi có tài khoản học tập tại Kiru, bạn có thể chủ động thời gian học tập của bản thân mình. Đặc biệt phù hợp với những bạn bận rộn, ít thời gian.</div>
                        </div>
                    </div>
                    <div className="">
                        <img 
                            className="h-[600px] rounded-l-[20px] pt-[100px] "
                            src = {Photo2}
                            alt = "Photo2" 
                        />
                    </div>
                </div>
            </div>
            <div className="pt-[50px] h-[600px] bg-blue-50 ">
                <div className="tracking-wide ">
                    <div className="font-japanese text-[40px] font-bold text-center">Kiru</div>
                    <div className="font-montserrat font-bold tracking-wide text-[40px] subpixel-antialiased leading-[4.5rem] text-center">Ưu điểm vượt trội</div>
                </div>
                <div className="">
                    <div className="grid grid-cols-2 gap-10 gap-x-[100px] px-[150px] pt-[50px]">
                        <div className="h-[130px] px-5 py-5 bg-white rounded-[20px] shadow-[0_40px_70px_-15px_rgba(0,0,0,0.3)] flex gap-[30px] ">
                            <div classname="flex-initial w-[100px] items-center ">
                                <p className="font-inter font-bold text-blue-500 text-[25px]">500+</p>
                                <FaBookReader className="h-[50px] w-[50px]"/>
                            </div>
                            <div className="">
                                <div className="font-inter font-bold text-[20px]">Khóa học </div>
                                <p className="font-inter py-2">Tổng hợp đầy đủ tất cả các kiến thức từ căn bản tới nâng cao và kinh nghiệm học thực tế.</p>
                            </div>
                        </div>
                        <div className="h-[130px] px-5 py-3 bg-white rounded-[20px] shadow-[0_40px_70px_-15px_rgba(0,0,0,0.3)] flex gap-[30px] ">
                            <div classname="flex-initial w-[100px] items-center ">
                                <p className="font-inter font-bold text-blue-500 text-[25px]">1000+</p>
                                <FaBookReader className="h-[50px] w-[50px]"/>
                            </div>
                            <div className="">
                                <div className="font-inter font-bold text-[20px]">Đề thi JLPT</div>
                                <p className="font-inter py-2">Từ các bài kiểm tra tiếng Nhật kiến thức căn bản đến các bài thi năng lực theo chuẩn kỳ thi năng lực tiếng Nhật JLPT của Nhật.
</p>
                            </div>
                        </div>
                        <div className="h-[130px] px-5 py-3 bg-white rounded-[20px] shadow-[0_40px_70px_-15px_rgba(0,0,0,0.3)] flex gap-[30px] ">
                            <div classname="flex-initial w-[100px] items-center ">
                                <p className="font-inter font-bold text-blue-500 text-[25px]">1500+</p>
                                <FaBookReader className="h-[50px] w-[50px]"/>
                            </div>
                            <div className="">
                                <div className="font-inter font-bold text-[20px]">Ngữ pháp</div>
                                <p className="font-inter py-2">Từ các bài kiểm tra tiếng Nhật kiến thức căn bản đến các bài thi năng lực theo chuẩn kỳ thi năng lực tiếng Nhật JLPT của Nhật.
</p>
                            </div>
                        </div>
                        <div className="h-[130px] px-5 py-5 bg-white rounded-[20px] shadow-[0_40px_70px_-15px_rgba(0,0,0,0.3)] flex gap-[30px] ">
                            <div classname="flex-initial w-[100px] items-center ">
                                <p className="font-inter font-bold text-blue-500 text-[25px]">150k+</p>
                                <FaBookReader className="h-[50px] w-[50px]"/>
                            </div>
                            <div className="">
                                <div className="font-inter font-bold text-[20px]">Từ vựng</div>
                                <p className="font-inter py-2">Kho từ vựng đầy đủ và toàn diện, dễ dàng tìm kiếm theo chủ đề và tra cứu nhanh chóng, chính xác.
</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div 
                className="bg-[url('/Users/quynhhuong/kiru_web/src/image/photo3.jpeg')] bg-cover bg-center h-[450px] "
                alt = "photo3" >
                <div className="backdrop-sepia-0 bg-white/80 h-[450px] ">
                    <div className="pl-[150px] w-[760px]">
                        <div className="pt-[50px] font-inter font-bold text-[36px] text-blue-500">Bạn chưa biết <a class="text-[50px]">bắt đầu từ đâu</a> và phải học như thế nào?</div> 
                        <p className="pt-5 font-bold ">Kiru biết mỗi bạn sẽ có nhu cầu học theo trình độ khác nhau. Vì thế, tại Kiru đã xây dựng sẵn lộ trình học theo từng trình độ mà bạn lựa chọn. Mỗi lộ trình đều đi từ những kiến thức cơ bản  đến nâng cao với đầy đủ các kỹ năng cho bạn. </p>
                        <div className="pt-10">
                            <button 
                                type="button"
                                className = "w-[300px] h-[70px] rounded-[40px] text-white bg-gradient-to-r from-amber-300  to-orange-500 hover:border-2 border-amber-700 hover:text-sky-500 font-interBold text-[25px] items-center">
                                Học ngay hôm nay
                            </button>
                        </div>
                    </div>
                </div>   
            </div>
            <div className="">
                <div className="pt-[100px] pl-[150px] font-inter font-bold text-[48px] w-[650px]">Gợi ý khóa học có thể phù hợp với bạn</div>
                <div className="flex flex-row gap-10 px-[150px] py-10">
                    <div className="w-[250px] h-[350px] bg-orange-100 rounded-[20px] py-5 px-5">
                        <div className="">
                            <img 
                                className=" rounded-[20px]  "
                                src = {photo4}
                                alt = "Photo4" 
                            />
                        </div>
                        <div className="pt-5 font-inter font-bold text-[24px]">Luyện thi JLPT</div>
                    </div>
                    <div className="w-[250px] h-[350px] bg-orange-100 rounded-[20px] py-5 px-5">
                        <div className="">
                            <img 
                                className=" rounded-[20px]  "
                                src = {photo5}
                                alt = "Photo5" 
                            />
                        </div>
                        <div className="pt-5 font-inter font-bold text-[24px]">JLPT cơ bản</div>
                    </div>
                    <div className="w-[250px] h-[350px] bg-orange-100 rounded-[20px] py-5 px-5">
                        <div className="">
                            <img 
                                className=" rounded-[20px]  "
                                src = {photo6}
                                alt = "Photo6" 
                            />
                        </div>
                        <div className="pt-5 font-inter font-bold text-[24px]">Luyện thi Kaiwa</div>
                    </div>
                    <div className="w-[250px] h-[350px] bg-orange-100 rounded-[20px] py-5 px-5">
                        <div className="">
                            <img 
                                className=" rounded-[20px]  "
                                src = {photo7}
                                alt = "Photo7" 
                            />
                        </div>
                        <div className="pt-5 font-inter font-bold text-[20px]">Tiếng Nhật văn phòng</div>
                    </div>
                </div>
            </div>
            <div className="">
            <div className="grid grid-cols-2 gap-[100px] pt-[100px]">
                <div className="font-inter font-bold text-[48px] pl-[150px] ">Không tìm được khoá học phù hợp?</div>
                <div className="">
                    <div className="">
                        <p className="font-inter  text-[20px] pb-5">Tên của bản</p>
                        <div className="h-[2px] w-[550px] bg-black "></div>
                    </div>
                    <div className="">
                        <p className="font-inter  text-[20px] pb-5 pt-10">Địa chỉ mail của bạn</p>
                        <div className="h-[2px] w-[550px] bg-black "></div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-[200px] pt-[30px]">
                <div className="font-inter text-[20px] pl-[150px]"><a className="font-japanese font-bold">Riku</a> sẽ giúp bạn tìm khóa học phù hợp nhé!</div>
                <div className="">
                    <button 
                        type="button"
                        className = "w-[200px] h-[50px] rounded-[40px] text-white bg-gradient-to-r from-amber-300  to-orange-500 hover:border-2 border-amber-700 hover:text-sky-500 font-interBold text-[25px] items-center">
                        Hỗ trợ tôi
                    </button>
                </div>
            </div>   
        </div>
            <div className="">
                <div className="pt-[110px] font-inter font-bold text-[48px] text-center pb-10">Câu hỏi thường gặp (FAQs)</div>
                <div className="px-[420px] content-center  ">
                    <div className="h-[70px] w-[600px]  border border-amber-500/50 rounded-[20px]  px-10 grid grid-cols-2 gap-[400px] items-center">
                        <p className="flex-initial w-[800px] font-bold text-[20px]">Khóa học tại Kiru có tính phí hay không?</p>
                        <div className="w-[40px] h-[40px] bg-amber-500/50 rounded-[30px] items-center py-3 pl-3">
                            <FaAngleDown/>
                        </div>
                    </div>
                </div>
                <div className="px-[420px] content-center pt-5 ">
                    <div className="h-[70px] w-[600px]  border border-amber-500/50 rounded-[20px]  px-10 grid grid-cols-2 gap-[400px] items-center">
                        <p className="flex-initial w-[800px] font-bold text-[20px]">Khóa học tại Kiru có tính phí hay không?</p>
                        <div className="w-[40px] h-[40px] bg-amber-500/50 rounded-[30px] items-center py-3 pl-3">
                            <FaAngleDown/>
                        </div>
                    </div>
                </div>
                <div className="px-[420px] content-center pt-5 ">
                    <div className="h-[70px] w-[600px]  border border-amber-500/50 rounded-[20px]  px-10 grid grid-cols-2 gap-[400px] items-center">
                        <p className="flex-initial w-[800px] font-bold text-[20px]">Khóa học tại Kiru có tính phí hay không?</p>
                        <div className="w-[40px] h-[40px] bg-amber-500/50 rounded-[30px] items-center py-3 pl-3">
                            <FaAngleDown/>
                        </div>
                    </div>
                </div>
                <div className="px-[420px] content-center pt-5 ">
                    <div className="h-[70px] w-[600px]  border border-amber-500/50 rounded-[20px]  px-10 grid grid-cols-2 gap-[400px] items-center">
                        <p className="flex-initial w-[800px] font-bold text-[20px]">Khóa học tại Kiru có tính phí hay không?</p>
                        <div className="w-[40px] h-[40px] bg-amber-500/50 rounded-[30px] items-center py-3 pl-3">
                            <FaAngleDown/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-[250px] ">
                <div className="h-[200px] bg-yellow-500/40 items-center">
                    <div className="text-[32px] font-interBold text-center pt-5">Hãy cùng Kiru chinh phục ngọn lửa trong bạn!</div>
                    <p className="text-[15px] font-interBold text-center pt-5">Đăng ký để nhận ngay lộ trình học ngay hôm nay</p>
                    <div className="text-center pt-5">
                        <button 
                            type="button"
                            className = "w-[200px] h-[50px] rounded-[40px] text-white bg-gradient-to-r from-amber-300  to-orange-500 hover:border-2 border-amber-700 hover:text-sky-500 font-interBold text-[25px] items-center">
                            Đăng ký
                        </button>
                    </div>
                </div>
            </div>
        </div>
            
    );
}
export default GioiThieu;