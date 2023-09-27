import './App.css';
// import HeaderBefor from "./component/header_footer/HeaderBefor";
import Footer from "./component/header_footer/footer";
import Menu from "./component/header_footer/Menu";
// import MyRoutes from './route/MyRoutes';
// import GioiThieu from "./component/Gioi_thieu"
// import KhoaHocBefor from "./component/Khoa_hoc_befor";
// import LienHe from "./component/Lien_he";
// import FAQs from "./component/FAQs";
// import DangKy from "./component/Dang_ky";
// import DangNhap from "./component/Dang_nhap";
// import QuenMK from "./component/Quen_mk";
// import DatlaiMk from "./component/Dat_lai_mk";
import Search from "./component/Search";

function App() {
  return (
    <div className = "bg-white">
      {/* <HeaderBefor></HeaderBefor> */}
      <Menu/>
      {/* <MyRoutes></MyRoutes> */}

      {/* Trang chủ chưa đăng nhập */}
      {/* <GioiThieu></GioiThieu>
      <KhoaHocBefor></KhoaHocBefor>
      <LienHe></LienHe>
      <FAQs></FAQs> */}

      {/* Trang đăng ký */}
      {/* <DangKy/> */}

      {/* Trang đăng nhập */}
      {/* <DangNhap/> */}

      {/* Quên mật khẩu */}
      {/* <QuenMK/> */}
      {/* <DatlaiMk/> */}

      {/* thanh Search */}
      <Search className="pt-0"/>
      <Footer></Footer>
    </div>
  );
}

export default App;
