import { Footer, Header } from "./components";
import { Route, Routes } from "react-router-dom";
import { Bookings, BrowseCars, CarDetail, Home } from "./pages";
import "react-datepicker/dist/react-datepicker.css";

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/car-detail/:id" element={<CarDetail />} />
        <Route path="/browse-cars" element={<BrowseCars />} />
        <Route path="/my-bookings" element={<Bookings />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
