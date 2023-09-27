import { Routes ,Route } from 'react-router-dom'; 
import TrangChu from "../page/TrangChu";
import BaiViet from "../page/Bai_viet";
import HoatHinh from "../page/Hoat_hinh";
import Khoahoc from "../page/Khoa_hoc";
import ThiJLPT from "../page/Thi_JLPT";
import GioiThieu from "../component/Gioi_thieu";
import KhoaHocBefor from "../component/Khoa_hoc_befor";
import LienHe from "../component/Lien_he";
import FAQs from "../component/FAQs"

const MyRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element = {<TrangChu />} />
                <Route path="/BaiViet" element = {<BaiViet />} />
                <Route path="/HoatHinh" element = {<HoatHinh/>} />
                <Route path="/Khoahoc" element = {<Khoahoc/>} />
                <Route path="/ThiJLPT" element = {<ThiJLPT/>} />
                <Route path="/GioiThieu" element = {<GioiThieu/>}/>
                <Route path="/KhoaHocBefor" element = {<KhoaHocBefor/>} />
                <Route path="/LienHe" element = {<LienHe/>} />
                <Route path="/FAQs" element = {<FAQs/>}/>
            </Routes>
        </div>
    )
}
export default MyRoutes;


