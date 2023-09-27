import React from "react";
import Photo from "../image/photo1.jpeg";
import {IoHomeOutline} from "react-icons/io5";

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
                            src = {Photo}
                            alt = "Photo1" 
                        />
                    </div>
                </div>
            </div>
            <div className="">
                <div className="font-montserrat font-bold tracking-wide text-[40px] subpixel-antialiased leading-[4.5rem] text-center">Về chúng tôi</div>
                <div className="pl-[200px]">
                    <div className="grid grid-cols-2 gap-10 flex-initial w-[900px] pt-5">
                        <div className="">
                            <div className="">
                                <div className="h-[50px] w-[50px] bg-green-500 text-[40px] font-[600] cursor-pointer">
                                    <IoHomeOutline/>
                                </div>
                                <p className="">Hệ thống kiến thức</p>
                            </div>
                            <div className="">Kiru cung cấp cho bạn một hệ thống học với kiến thức tiếng Nhật đầy đủ và toàn diện như: Từ vựng, Ngữ pháp, Kanji,... và các bài kiểm tra sau mỗi bài học phong phú.</div>
                        </div>
                        <div className="">
                            <div className="">
                                <p className="">Phương pháp học  hiệu quả</p>
                            </div>
                            <div className="">Chương trình học tại Kiru cung cấp đầy đủ các kiến thức thông qua phương pháp học ngữ pháp qua video, học từ vựng qua xem anime.</div>
                        </div>
                        <div className="">
                            <div className="">
                                <p className="">JLPT - Kho đề thi miễn phí, 
không giới hạn </p>
                            </div>
                            <div className="">Kiru cùng bạn ôn tập lại kiến thức và chuẩn bị đầy đủ hành trang trước khi bước vào kỳ thi chính thức như: Trắc nghiệm kanji, Luyện từ vựng,...với các trình độ khác nhau N5, N4,... </div>
                        </div>
                        <div className="">
                            <div className="">
                                <p className="">Blog - Những câu chuyện thú vị </p>
                            </div>
                            <div className="">Truyền cảm hứng học tiếng Nhật đến các bạn qua các bài Blog chia sẻ về kiến thức,trải nghiệm khi học tiếng Nhật, Chia sẻ nhưng kinh nghiệm trong cuộc sống tại Nhật,...với nhiều chủ đề thú vị khác nhau. </div>
                        </div>
                        <div className="">
                            <div className="">
                                <p className="">JLPT - Kho đề thi miễn phí, 
không giới hạn </p>
                            </div>
                            <div className="">Kiru cùng bạn ôn tập lại kiến thức và chuẩn bị đầy đủ hành trang trước khi bước vào kỳ thi chính thức như: Trắc nghiệm kanji, Luyện từ vựng,...với các trình độ khác nhau N5, N4,... </div>
                        </div>
                        <div className="">
                            <div className="">
                                <p className="">Học mọi lúc mọi nơi</p>
                            </div>
                            <div className="">Khi có tài khoản học tập tại Kiru, bạn có thể chủ động thời gian học tập của bản thân mình. Đặc biệt phù hợp với những bạn bận rộn, ít thời gian.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
    );
}
export default GioiThieu;