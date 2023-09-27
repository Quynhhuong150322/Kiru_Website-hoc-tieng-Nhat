import { Routes ,Route } from 'react-router-dom'; 
import Home from "../page/Home"

const MyRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    );
};
export default MyRoutes;


