import { Routes ,Route } from 'react-router-dom'; 

// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import TrangChu from "../page/TrangChu";
import BaiViet from "../page/Bai_viet";
import HoatHinh from "../page/Hoat_hinh";
import Khoahoc from "../page/Khoa_hoc";
import ThiJLPT from "../page/Thi_JLPT";
import GioiThieu from "../component/Gioi_thieu";
import KhoaHocBefor from "../component/Khoa_hoc_befor";
import LienHe from "../component/Lien_he";
import FAQs from "../component/FAQs";

import DangKy from "../component/Dang_ky";
import DangNhap from "../component/Dang_nhap";
// import 

const MyRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element = {<GioiThieu />} />
                <Route path="/BaiViet" element = {<BaiViet />} />
                <Route path="/HoatHinh" element = {<HoatHinh/>} />
                <Route path="/Khoahoc" element = {<Khoahoc/>} />
                <Route path="/ThiJLPT" element = {<ThiJLPT/>} />
                <Route path="/GioiThieu" element = {<GioiThieu/>}/>
                <Route path="/KhoaHocBefor" element = {<KhoaHocBefor/>} />
                <Route path="/LienHe" element = {<LienHe/>} />
                <Route path="/FAQs" element = {<FAQs/>}/>
                <Route path="/DangKy" elemwnt = {<DangKy/>}/>
                <Route path="/DangNhap" elemwnt = {<DangNhap/>}/>
            </Routes>
        </div>
    )
}
export default MyRoutes;


