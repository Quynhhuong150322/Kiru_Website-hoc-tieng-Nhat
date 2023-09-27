import './App.css';
import HeaderBefor from "./component/HeaderBefor";
// import MyRoutes from './route/MyRoutes';
import GioiThieu from "./component/Gioi_thieu"
import KhoaHocBefor from "../src/component/Khoa_hoc_befor";

function App() {
  return (
    <div className = "bg-white">
      {/* <MyRoutes></MyRoutes> */}
      <HeaderBefor></HeaderBefor>
      <GioiThieu></GioiThieu>
      <KhoaHocBefor></KhoaHocBefor>
    </div>
  );
}

export default App;
