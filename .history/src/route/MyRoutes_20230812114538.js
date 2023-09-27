import { Routes ,Route } from 'react-router-dom'; 
import Home from "../page/Home";
import BaiViet from "../page/Bai_viet";
import HoatHinh from "../page/Hoat_hinh";
import Khoahoc from "../page/Khoa_hoc";



const MyRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/BaiViet" element={<BaiViet />} />
                <Route path="/HoatHinh" element={<HoatHinh/>} />
                <Route path="/Khoahoc" element= {<Khoahoc/>} />
            </Routes>
        </div>
    )
}
export default MyRoutes;


