import { Routes ,Route } from 'react-router-dom'; 
import Home from "../page/Home";
import BaiViet from "../page/Bai_viet";
import HoatHinh from "../page/Hoat_hinh";
import Khoahoc from "../page/Khoa_hoc";
import GioiThieu from "../component/Gioi_thieu";
import KhoaHocBefor from "../component/Khoa_hoc_befor";
import LienHe from "../component/Lien_he";
import FAQs from "../component/FAQs"

const MyRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/BaiViet" element={<BaiViet />} />
                <Route path="/HoatHinh" element={<HoatHinh/>} />
                <Route path="/Khoahoc" element= {<Khoahoc/>} />
                <Route path="/GioiThieu" element = {<GioiThieu/>}/>
                <Route path="/KhoaHocBefor" element = {<KhoaHocBefor/>} />
                <Route path="/LienHe" element = {<LienHe/>} />
                <Route path="/FAQs" element = {<FAQs/>}/>
            </Routes>
        </div>
    )
}
export default MyRoutes;


