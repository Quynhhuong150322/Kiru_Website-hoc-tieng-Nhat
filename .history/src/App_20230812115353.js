import './App.css';
import HeaderBefor from "./component/HeaderBefor";
// import {MyRoutes} from './route/MyRoutes';

function App() {
  return (
    <div className = "bg-white">
      <HeaderBefor></HeaderBefor>
      {/* <MyRoutes></MyRoutes> */}
      <h1 className= "text-6xl text-red-500">Heloo</h1>
    </div>
  );
}

export default App;