import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import PlantDetails from "./pages/PlantDetails";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="font-mainfont">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/plant/:id" element={<PlantDetails />} />
      </Routes>
    </div>
  );
};

export default App;
