import './App.css';
import Header from "./component/header/Header";
import MyRoutes from './route/MyRoutes';

function App() {
  return (
    <div className = "bg-white">
      <Header></Header>
      <MyRoutes></MyRoutes>
      {/* <h1 className= "text-6xl text-red-500">Heloo</h1> */}
    </div>
  );
}

export default App;