import './App.css';
import HeaderBefor from "./component/HeaderBefor";
// import MyRoutes from './route/MyRoutes';
import GioiThieu from "./component/Gioi_thieu"

function App() {
  return (
    <div className = "bg-white">
      {/* <MyRoutes></MyRoutes> */}
      <HeaderBefor></HeaderBefor>
      <GioiThieu></GioiThieu>
    </div>
  );
}

export default App;
