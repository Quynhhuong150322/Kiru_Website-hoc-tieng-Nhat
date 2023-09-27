import './App.css';
import HeaderBefor from "./component/header_footer/HeaderBefor";
// import MyRoutes from './route/MyRoutes';
import GioiThieu from "./component/Gioi_thieu"
import KhoaHocBefor from "./component/Khoa_hoc_befor";
import LienHe from "./component/Lien_he";
import FAQs from "./component/FAQs";

function App() {
  return (
    <div className = "bg-white">
      {/* <MyRoutes></MyRoutes> */}
      <HeaderBefor></HeaderBefor>
      <GioiThieu></GioiThieu>
      <KhoaHocBefor></KhoaHocBefor>
      <LienHe></LienHe>
      <FAQs></FAQs>
    </div>
  );
}

export default App;
