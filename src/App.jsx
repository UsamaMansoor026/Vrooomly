import { Header } from "./components";
import { Route, Routes } from "react-router-dom";
import { CarDetail, Home } from "./pages";
import "react-datepicker/dist/react-datepicker.css";

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/car-detail/:id" element={<CarDetail />} />
      </Routes>
    </>
  );
};

export default App;
